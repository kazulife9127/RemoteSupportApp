import { generateClient } from 'aws-amplify/api';
import { listUsers } from '../graphql/queries';
import { createUser } from '../graphql/mutations';

const client = generateClient();

export const findUserByEmail = async (email: string): Promise<any[]> => {
  try {
    const result: any = await client.graphql({
      query: listUsers,
      variables: { filter: { email: { eq: email } } }
    });

    if (result.data && result.data.listUsers && result.data.listUsers.items.length > 0) {
      return result.data.listUsers.items;
    }
    return [];
  } catch (error) {
    console.error('Error finding user by email:', error);
    throw new Error('Error finding user');
  }
};

export const addFriend = async (user: any): Promise<void> => {
  try {
    await client.graphql({
      query: createUser,
      variables: { input: user }
    });
    console.log(`${user.username} has been added as a friend.`);
  } catch (error) {
    console.error('Error adding friend:', error);
    throw new Error('Error adding friend');
  }
};