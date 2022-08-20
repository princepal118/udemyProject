import React from 'react';
// import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import CategoriesScreens from './screens/CategoriesScreens';

const App = () => {
  return (
    <View>
      <CategoriesScreens />;
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
