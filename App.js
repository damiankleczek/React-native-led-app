import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import Element from './shared/Element';

const App = () => {
  console.warn = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={styles.statusbar.backgroundColor}></StatusBar>
      <View style={styles.content}>
        <Element />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#337f83',
  },

  content: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },

  statusbar: {
    backgroundColor: '#004346',
  },
});
export default App;
