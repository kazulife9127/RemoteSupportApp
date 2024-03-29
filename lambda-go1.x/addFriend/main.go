package main

import (
	"context"
	"fmt"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"

	"github.com/google/uuid"
)

type FriendRequest struct {
	UserID   string `json:"userId"`
	FriendID string `json:"friendId"`
}

func AddFriend(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	// クエリパラメータからuserIdとfriendIdを取得
	userID := request.QueryStringParameters["userId"]
	friendID := request.QueryStringParameters["friendId"]
	uniqueID := uuid.New().String()
	fmt.Printf("UserID: %s, FriendID: %s\n", userID, friendID)

	sess := session.Must(session.NewSession())
	svc := dynamodb.New(sess)
	_, err := svc.PutItem(&dynamodb.PutItemInput{
		TableName: aws.String("Friendship-vn334uc24baqnle3zqjm4e7a6u-dev"),
		Item: map[string]*dynamodb.AttributeValue{
			"id":        {S: aws.String(uniqueID)},
			"userId":    {S: aws.String(userID)},
			"friendId":  {S: aws.String(friendID)},
			"createdAt": {S: aws.String(time.Now().Format(time.RFC3339))},
		},
	})
	if err != nil {
		fmt.Println("Error adding friend:", err)
		return events.APIGatewayProxyResponse{StatusCode: 500}, nil
	}

	return events.APIGatewayProxyResponse{
		StatusCode: 200,
		Body:       `{"message":"Friend added successfully"}`,
	}, nil
}

func main() {
	lambda.Start(AddFriend)
}
