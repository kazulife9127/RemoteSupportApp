import React, { useLayoutEffect, useState } from 'react';
import { Button, FlatList, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AddFriendScreen from './AddFriendScreen';
import ChatListItem from '../components/ChatListItem'; // ChatListItemをインポート
import { RootStackParamList } from '../types/types';
import { StackNavigationProp } from '@react-navigation/stack';

// ナビゲーションプロパティの型を指定
type MessageScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Message'>;

const MessageScreen: React.FC = () => {
  const navigation = useNavigation<MessageScreenNavigationProp>();

  const [modalVisible, setModalVisible] = useState(false);
  

  // ダミーデータ
  const chats = [
    { id: '1', chatName: '友達1', lastMessage: 'こんにちは！' },
    { id: '2', chatName: '友達2', lastMessage: '今日はどうですか？' },
    // 他のチャットデータ...
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => setModalVisible(true)}
          title="友達追加"
        />
      ),
    });
  }, [navigation]);

  return (
    <>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatListItem
            chatName={item.chatName}
            lastMessage={item.lastMessage}
            onPress={() => navigation.navigate('ChatRoomScreen', { chatId: item.id })}
          />
        )}
      />
      <AddFriendScreen isVisible={modalVisible} onClose={() => setModalVisible(false)} />
    </>
  );
};

export default MessageScreen;
