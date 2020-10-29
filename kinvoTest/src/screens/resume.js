import React from 'react';
import {View, Text} from 'react-native';
import AppStatusBar from '../components/AppStatusBar';

import styles from '../styles';

const Resume = () => {
  return (
    <>
      <AppStatusBar />
      <View style={styles.offScreenCointainer}>
        <Text>Resume</Text>
      </View>
    </>
  );
};

export default Resume;
