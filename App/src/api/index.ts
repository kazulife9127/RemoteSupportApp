// /src/api/index.ts

interface User {
    id: string;
    email: string;
    username: string;
  }
  
  // デモ用のユーザーデータ
  const demoUsers: User[] = [
    { id: '1', email: 'user1@example.com', username: 'Masao' },
    { id: '2', email: 'user2@example.com', username: 'Nene' },
    { id: '3', email: 'user3@example.com', username: 'Suneo' },
  ];
  
  // メールアドレスに基づいてユーザーを検索する関数
  export const findUserByEmail = async (email: string): Promise<User[]> => {
    // 完全一致でフィルタリングを行う
    const filteredUsers = demoUsers.filter(user => user.email === email);
    return Promise.resolve(filteredUsers); // 模擬的な非同期処理を表現
  };
  
  // 以下は、友達を追加する関数のモックです。
  // 実際のアプリケーションでは、この関数を実際のAPI呼び出しに置き換える必要があります。
  export const addFriend = async (userId: string): Promise<void> => {
    console.log(`${userId} has been added as a friend.`); // デモのためのログ
    return Promise.resolve(); // 模擬的な非同期処理を表現
  };
  