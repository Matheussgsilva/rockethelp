import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { SignIn } from './src/screens/Signin';
import { THEME } from './src/styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <SignIn />
    </NativeBaseProvider>
  );
}
