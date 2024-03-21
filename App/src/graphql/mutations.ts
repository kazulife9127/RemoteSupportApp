export const createFriendship = /* GraphQL */ `
  mutation CreateFriendship($userId: ID!, $friendId: ID!) {
    createFriendship(input: {userId: $userId, friendId: $friendId}) {
      id
      userId
      friendId
    }
  }
`;
