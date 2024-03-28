package main

import (
	"context"
	"fmt"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
)

type User struct {
	ID        string `json:"id"`
	UserName  string `json:"userName"`
	Email     string `json:"email"`
	CreatedAt string `json:"createdAt"`
}

func putUserInfo(ctx context.Context, event events.CognitoEventUserPoolsPostConfirmation) (events.CognitoEventUserPoolsPostConfirmation, error) {
	sess := session.Must(session.NewSession())
	svc := dynamodb.New(sess)

	user := User{
		ID:    event.UserName,
		Email: event.Request.UserAttributes["email"],
	}

	av, err := dynamodbattribute.MarshalMap(user)
	if err != nil {
		fmt.Println("Got error marshalling map:")
		fmt.Println(err.Error())
		return event, err
	}

	input := &dynamodb.PutItemInput{
		Item:      av,
		TableName: aws.String("User-vn334uc24baqnle3zqjm4e7a6u-dev"),
	}

	_, err = svc.PutItem(input)
	if err != nil {
		fmt.Println("Got error calling PutItem:")
		fmt.Println(err.Error())
		return event, err
	}

	fmt.Println("Successfully added user to DynamoDB table.")
	return event, nil
}

func main() {
	lambda.Start(putUserInfo)
}
