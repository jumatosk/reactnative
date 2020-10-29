import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from '../styles';
import {color} from '../styles/colors';

const HeaderTitle = ({title, selected}) => {
  let selectedColor = selected !== undefined ? color.ice : color.primary;

  return (
    <TouchableOpacity style={styles.headerTitleTxtView} activeOpacity={1}>
      <View style={[styles.selected, {backgroundColor: selectedColor}]}>
        <Text style={styles.headerTitleTxt}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HeaderTitle;
