import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from '@fastfood/screens/SignIn';

const App: React.FC = () => {
  return <SignIn />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
