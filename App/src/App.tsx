import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react-native';
import AppNavigator from './navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <AppNavigator />
      </Authenticator>
    </Authenticator.Provider>
  );
};

export default App;
