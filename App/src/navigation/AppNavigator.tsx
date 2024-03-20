import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MessageScreen from '../screens/MessageScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen'; 
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const MessageStack = createStackNavigator(); 


function MessageStackScreen() {
  return (
    <MessageStack.Navigator screenOptions={{ headerShown: false }}>
      <MessageStack.Screen name="MessageHome" component={MessageScreen}  />
      <MessageStack.Screen name="ChatRoomScreen" component={ChatRoomScreen}  />
    </MessageStack.Navigator>
  );
}

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Message" component={MessageStackScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
