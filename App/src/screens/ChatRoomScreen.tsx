import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

// 仮のチャットメッセージデータ
const DUMMY_MESSAGES = [
  { id: 'm1', text: 'こんにちは！', createdAt: '2022-01-01T12:00:00.000Z', UserId: 'u1' },
  { id: 'm2', text: '今日はどう？', createdAt: '2022-01-01T12:05:00.000Z', UserId: 'u2' },
  // 他のメッセージ...
];

const ChatRoomScreen: React.FC = () => {
  const [inputText, setInputText] = useState('');

  // メッセージ送信処理（仮）
  const sendMessage = () => {
    console.log(inputText);
    // ここにメッセージ送信のロジックを実装
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DUMMY_MESSAGES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageBox}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="メッセージを入力..."
        />
        <Button title="送信" onPress={sendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageBox: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

export default ChatRoomScreen;
