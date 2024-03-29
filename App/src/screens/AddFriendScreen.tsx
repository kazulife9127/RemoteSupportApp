// src/screens/AddFriendScreen
import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { findUserByEmail, addFriend } from '../api/index';
import { getCurrentUser } from '@aws-amplify/auth';

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
        setSearchResult(results[0]);
      } else {
        Alert.alert('検索結果', '該当するユーザーが見つかりませんでした。');
        setSearchResult(null);
      }
    } else {
      Alert.alert('入力エラー', 'メールアドレスを入力してください。');
    }
  };

  const handleAddFriend = async () => {
    //console.log(searchResult);
    if (searchResult) {
      try {
        const currentUser = await currentAuthenticatedUser();
        if (currentUser.userId) {
          await addFriend(currentUser.username, searchResult.id);
          Alert.alert('成功', `${searchResult.username}を友達リストに追加しました。`, [
            { text: "OK", onPress: () => setEmail('') } 
          ]);
          setSearchResult(null); 
          onClose();
        } else {
          Alert.alert('エラー', '現在のユーザー情報を取得できませんでした。');
        }
      } catch (error) {
        console.error('友達追加エラー:', error);
        Alert.alert('エラー', '友達を追加できませんでした。');
      }
    }
  };

  async function currentAuthenticatedUser(): Promise<{ userId: string; username: string }> {
    try {
      const user = await getCurrentUser();
      return { userId: user.userId, username: user.username };
    } catch (err) {
      console.error('現在のユーザー情報取得エラー:', err);
      return { userId: '', username: '' };
    }
  }

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
            <Text style={styles.resultText}>{searchResult.id}</Text>
            <TouchableOpacity onPress={handleAddFriend}>
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
    marginTop: 10,
    color: 'blue',
  },
});

export default AddFriendScreen;
