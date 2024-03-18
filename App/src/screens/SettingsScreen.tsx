import React from 'react';
import { Text, View } from 'react-native';
import { SignOutButton } from '../components/SignOutButton';

const SettingsScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <SignOutButton />
    </View>
  );
};

export default SettingsScreen;
