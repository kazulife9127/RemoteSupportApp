// src/api/index.ts

import axios from 'axios';

export const findUserByEmail = async (email: string): Promise<any[]> => {
  try {
      const lambdaUrl = `https://0kym8zlpj0.execute-api.ap-northeast-1.amazonaws.com/dev/getemailquery?email=${encodeURIComponent(email)}`;
      const response = await axios.get(lambdaUrl);
      return response.data;
  } catch (error) {
      console.error('Error finding user by email:', error);
      throw new Error('Error finding user');
  }
};



export const addFriend = async (userId: string, friendId: string): Promise<void> => {
  try {
    const lambdaUrl = 'https://0kym8zlpj0.execute-api.ap-northeast-1.amazonaws.com/dev/addFriend';
    await axios.post(lambdaUrl, {
      userId,
      friendId,
    });
    console.log(`User ${friendId} has been added as a friend to user ${userId}.`);
  } catch (error) {
    console.error('Error adding friend:', error);
    throw new Error('Error adding friend');
  }
};