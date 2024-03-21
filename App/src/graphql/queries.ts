export const getUserByEmail = /* GraphQL */ `
  query GetUserByEmail($email: String!) {
    listUsers(filter: {email: {eq: $email}}) {
      items {
        id
        email
      }
    }
  }
`;
