// ファイル名: ContactScreen.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Friend {
  id: string;
  email: string;
}

const initialFriends: Friend[] = [
  { id: '1', email: 'friend1@example.com' },
  { id: '2', email: 'friend2@example.com' },
  // ダミーデータ、実際にはAPIからのデータを想定
];

const ContactScreen: React.FC = () => {
  const [friends, setFriends] = useState<Friend[]>(initialFriends);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>友達リスト</Text>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Text>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    margin: 10,
  },
  friendItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default ContactScreen;
