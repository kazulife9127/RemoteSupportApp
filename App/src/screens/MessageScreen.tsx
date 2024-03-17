import React, { useLayoutEffect, useState } from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AddFriendScreen from './AddFriendScreen';

const MessageScreen: React.FC = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

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
      {/* MessageScreenの内容 */}
      <AddFriendScreen isVisible={modalVisible} onClose={() => setModalVisible(false)} />
    </>
  );
};

export default MessageScreen;
