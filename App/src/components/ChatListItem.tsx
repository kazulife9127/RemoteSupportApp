import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ChatListItemProps {
  chatName: string;
  lastMessage: string;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ chatName, lastMessage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.chatName}>{chatName}</Text>
      <Text>{lastMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  chatName: {
    fontWeight: 'bold',
  },
});

export default ChatListItem;
