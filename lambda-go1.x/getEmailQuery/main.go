package main

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
	"github.com/aws/aws-sdk-go/service/dynamodb/expression"
)

// User はDynamoDBのテーブル構造に対応します
type User struct {
	ID    string `json:"id"`
	Email string `json:"email"`
}

// Handler はAPI Gatewayからのリクエストを処理します
func Handler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	email := request.QueryStringParameters["email"]
	if email == "" {
		return events.APIGatewayProxyResponse{Body: "Email query parameter is required", StatusCode: 400}, nil
	}

	sess := session.Must(session.NewSession())
	svc := dynamodb.New(sess)

	// ExpressionAttributeNamesの`#email`はDynamoDBの予約語と衝突しないようにするためのプレースホルダーです
	keyCond := expression.Key("email").Equal(expression.Value(email))
	expr, err := expression.NewBuilder().WithKeyCondition(keyCond).Build()
	if err != nil {
		fmt.Println("Got error building expression:", err.Error())
		return events.APIGatewayProxyResponse{}, err
	}

	input := &dynamodb.QueryInput{
		TableName:                 aws.String("User-vn334uc24baqnle3zqjm4e7a6u-dev"),
		IndexName:                 aws.String("EmailIndex"),
		ExpressionAttributeNames:  expr.Names(),
		ExpressionAttributeValues: expr.Values(),
		KeyConditionExpression:    expr.KeyCondition(),
	}

	result, err := svc.Query(input)
	if err != nil {
		fmt.Println("Got error calling Query:", err.Error())
		return events.APIGatewayProxyResponse{}, err
	}

	var users []User
	err = dynamodbattribute.UnmarshalListOfMaps(result.Items, &users)
	if err != nil {
		fmt.Println("Got error unmarshalling:", err.Error())
		return events.APIGatewayProxyResponse{}, err
	}

	responseBody, err := json.Marshal(users)
	if err != nil {
		fmt.Println("Got error marshalling response:", err.Error())
		return events.APIGatewayProxyResponse{}, err
	}

	return events.APIGatewayProxyResponse{
		StatusCode: 200,
		Body:       string(responseBody),
	}, nil
}

func main() {
	lambda.Start(Handler)
}
