import React from 'react';
import {Image} from 'react-native';
import styles from '../styles';

import resume from '../assets/images/resume.png';
import wallet from '../assets/images/wallet.png';
import plus from '../assets/images/plus.png';
import premium from '../assets/images/premium.png';
import account from '../assets/images/account.png';

export default ({name}) => {
  let img =
    name === 'resume'
      ? resume
      : name === 'wallet'
      ? wallet
      : name === 'plus'
      ? plus
      : name === 'premium'
      ? premium
      : name === 'account'
      ? account
      : null;
  return <Image source={img} style={styles.icon} />;
};
