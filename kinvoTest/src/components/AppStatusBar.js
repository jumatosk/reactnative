import React from 'react';
import {View, StatusBar, StyleSheet, Platform} from 'react-native';
import {color} from '../styles/colors';

export default ({...props}) => {
  return (
    <View style={[styles.statusBar, {height: STATUSBAR_HEIGHT}]}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={color.primary}
        {...props}
      />
    </View>
  );
};

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: color.primary,
  },
});
