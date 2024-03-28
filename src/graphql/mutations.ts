/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    username
    email
    messages {
      nextToken
      __typename
    }
    friends {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    username
    email
    messages {
      nextToken
      __typename
    }
    friends {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    username
    email
    messages {
      nextToken
      __typename
    }
    friends {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
    id
    content
    userId
    user {
      id
      username
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
    id
    content
    userId
    user {
      id
      username
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
    id
    content
    userId
    user {
      id
      username
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const createFriendship = /* GraphQL */ `mutation CreateFriendship(
  $input: CreateFriendshipInput!
  $condition: ModelFriendshipConditionInput
) {
  createFriendship(input: $input, condition: $condition) {
    id
    userId
    friendId
    user {
      id
      username
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    friend {
      id
      username
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFriendshipMutationVariables,
  APITypes.CreateFriendshipMutation
>;
export const updateFriendship = /* GraphQL */ `mutation UpdateFriendship(
  $input: UpdateFriendshipInput!
  $condition: ModelFriendshipConditionInput
) {
  updateFriendship(input: $input, condition: $condition) {
    id
    userId
    friendId
    user {
      id
      username
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    friend {
      id
      username
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFriendshipMutationVariables,
  APITypes.UpdateFriendshipMutation
>;
export const deleteFriendship = /* GraphQL */ `mutation DeleteFriendship(
  $input: DeleteFriendshipInput!
  $condition: ModelFriendshipConditionInput
) {
  deleteFriendship(input: $input, condition: $condition) {
    id
    userId
    friendId
    user {
      id
      username
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    friend {
      id
      username
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFriendshipMutationVariables,
  APITypes.DeleteFriendshipMutation
>;
