import React from 'react';
import { Button } from 'react-native';
import { useAuthenticator } from '@aws-amplify/ui-react-native';

export function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}
