import React from 'react';
import {View, Text} from 'react-native';
import AppStatusBar from '../components/AppStatusBar';

import styles from '../styles';

const Plus = () => {
  return (
    <>
      <AppStatusBar />
      <View style={styles.offScreenCointainer}>
        <Text>Plus</Text>
      </View>
    </>
  );
};

export default Plus;
