import React from 'react';
import {Image} from 'react-native';
import {Header, Left, Body} from 'native-base';
import HeaderTitle from '../components/HeaderTitle';
import {color} from '../styles/colors';
import arrowLeft from '../assets/images/arrow.png';
import styles from '../styles';

const MyHeader = () => {
  return (
    <Header
      iosBarStyle={color.whiteIce}
      androidStatusBarColor={color.whiteIce}
      style={{
        backgroundColor: color.primary,
      }}>
      <Left style={{flex: 0.07}}>
        <Image source={arrowLeft} style={styles.headerIconLeft} />
      </Left>
      <Body style={{flexDirection: 'row'}}>
        <HeaderTitle title="Carteira" />
        <HeaderTitle title="Produtos" selected />
        <HeaderTitle title="Extrato" />
      </Body>
    </Header>
  );
};

export default MyHeader;
