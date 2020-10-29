import React from 'react';
import {View, Text} from 'react-native';
import AppStatusBar from '../components/AppStatusBar';
import styles from '../styles';

const Account = () => {
  return (
    <>
      <AppStatusBar />
      <View style={styles.offScreenCointainer}>
        <Text>Account</Text>
      </View>
    </>
  );
};

export default Account;
