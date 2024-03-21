import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { findUserByEmail } from '../api'; // API関数のインポート

interface AddFriendScreenProps {
  isVisible: boolean;
  onClose: () => void;
}

interface User {
  id: string;
  email: string;
  username: string;
}

const AddFriendScreen: React.FC<AddFriendScreenProps> = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState('');
  const [searchResult, setSearchResult] = useState<User | null>(null);

  const handleSearch = async () => {
    if (email) {
      const results = await findUserByEmail(email);
      if (results.length > 0) {
        // メールアドレスに合致する最初のユーザーを表示
        setSearchResult(results[0]);
      } else {
        Alert.alert('検索結果', '該当するユーザーが見つかりませんでした。');
        setSearchResult(null);
      }
    } else {
      Alert.alert('入力エラー', 'メールアドレスを入力してください。');
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <Text>友達を追加</Text>
        <TextInput
          placeholder="メールアドレスを入力"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={setEmail}
          value={email}
        />
        <Button title="検索" onPress={handleSearch} />
        {searchResult && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}> {searchResult.username}</Text>
            <TouchableOpacity onPress={() => Alert.alert('友達追加', `ユーザー ${searchResult.username} を友達に追加しますか？`, [
              {
                text: "はい",
                onPress: () => {/* 友達追加の処理 */},
              },
              {
                text: "いいえ",
              },
            ])}>
              <Text style={styles.addButton}>友達に追加</Text>
            </TouchableOpacity>
          </View>
        )}
        <Button title="戻る" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
  },
  addButton: {
    marginTop: 100,
    color: 'blue',
  },
});

export default AddFriendScreen;
