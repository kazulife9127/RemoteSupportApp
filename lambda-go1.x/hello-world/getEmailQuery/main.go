package main

import (
	"fmt"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
	"github.com/aws/aws-sdk-go/service/dynamodb/expression"
)

type User struct {
	ID        string `json:"id"`
	UserName  string `json:"userName"`
	Email     string `json:"email"`
	CreatedAt string `json:"createdAt"`
}

func GetEmailQuery(email string) ([]User, error) {
	sess := session.Must(session.NewSession())
	svc := dynamodb.New(sess)

	// クエリ条件の設定
	filt := expression.Name("email").Equal(expression.Value(email))
	expr, err := expression.NewBuilder().WithFilter(filt).Build()
	if err != nil {
		fmt.Println("Got error building expression:")
		fmt.Println(err.Error())
		return nil, err
	}

	// Query実行
	input := &dynamodb.QueryInput{
		TableName:                 aws.String("User-vn334uc24baqnle3zqjm4e7a6u-dev"),
		IndexName:                 aws.String("EmailIndex"),
		ExpressionAttributeNames:  expr.Names(),
		ExpressionAttributeValues: expr.Values(),
		FilterExpression:          expr.Filter(),
	}

	result, err := svc.Query(input)
	if err != nil {
		fmt.Println("Got error calling Query:")
		fmt.Println(err.Error())
		return nil, err
	}

	// 結果のマッピング
	var users []User
	err = dynamodbattribute.UnmarshalListOfMaps(result.Items, &users)
	if err != nil {
		fmt.Println("Got error unmarshalling:")
		fmt.Println(err.Error())
		return nil, err
	}

	return users, nil
}

func main() {
	lambda.Start(GetEmailQuery)
}
