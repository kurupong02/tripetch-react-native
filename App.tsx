import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RootNavigator from './src/screens';

const App = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <RootNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default App;
