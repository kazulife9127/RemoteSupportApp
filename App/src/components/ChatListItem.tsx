import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ChatListItemProps {
  chatName: string;
  lastMessage: string;
  onPress: () => void;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ chatName, lastMessage, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.chatName}>{chatName}</Text>
      <Text>{lastMessage}</Text>
    </TouchableOpacity>
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
