// src/api/index.ts
import { generateClient } from 'aws-amplify/api';
import { listUsers } from '../graphql/queries';
import { createUser } from '../graphql/mutations';
import axios from 'axios'; // 必要に応じてインストール

export const findUserByEmail = async (email: string): Promise<any[]> => {
  try {
      const url = `https://0kym8zlpj0.execute-api.ap-northeast-1.amazonaws.com/dev/getemailquery?email=${encodeURIComponent(email)}`;
      const response = await axios.get(url);
      return response.data; // Lambda関数からのレスポンス
  } catch (error) {
      console.error('Error finding user by email:', error);
      throw new Error('Error finding user');
  }
};



const client = generateClient();



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