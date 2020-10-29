import React from 'react';
import {View, Text} from 'react-native';
import AppStatusBar from '../components/AppStatusBar';

import styles from '../styles';

const Premium = () => {
  return (
    <>
      <AppStatusBar />
      <View style={styles.offScreenCointainer}>
        <Text>Premium</Text>
      </View>
    </>
  );
};

export default Premium;
