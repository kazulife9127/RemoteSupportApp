// ファイル名: AddFriendScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Modal, TextInput, Button } from 'react-native';

interface AddFriendScreenProps {
  isVisible: boolean;
  onClose: () => void;
}

const AddFriendScreen: React.FC<AddFriendScreenProps> = ({ isVisible, onClose }) => {
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
          autoCapitalize="none" // 小文字入力を保証
        />
        <Button
          title="送信"
          onPress={() => console.log('メールアドレス送信')} 
        />
        <Button
          title="戻る"
          onPress={onClose}
        />
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
});

export default AddFriendScreen;
