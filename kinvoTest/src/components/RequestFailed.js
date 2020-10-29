import React from 'react';
import {View, Image} from 'react-native';

import requestFailed from '../assets/requestFailed.png';
import styles from '../styles';

const RequestFailed = () => {
  return (
    <View style={styles.containerImg}>
      <Image source={requestFailed} style={styles.requestFailedImg} />
    </View>
  );
};

export default RequestFailed;
