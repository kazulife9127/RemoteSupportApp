// ファイル名: FriendsContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Friend {
  id: string;
  email: string;
  username: string;
}

interface FriendsContextType {
  friends: Friend[];
  addFriend: (newFriend: Friend) => void;
}

const FriendsContext = createContext<FriendsContextType | undefined>(undefined);

export const useFriends = () => {
  const context = useContext(FriendsContext);
  if (context === undefined) {
    throw new Error('useFriends must be used within a FriendsProvider');
  }
  return context;
};

export const FriendsProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [friends, setFriends] = useState<Friend[]>([]);

  const addFriend = (newFriend: Friend) => {
    setFriends((prevFriends) => [...prevFriends, newFriend]);
  };

  return (
    <FriendsContext.Provider value={{ friends, addFriend }}>
      {children}
    </FriendsContext.Provider>
  );
};
