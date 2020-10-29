import React from 'react';
import {View, Text} from 'react-native';
import {Divider} from 'react-native-paper';
import styles from '../styles';
import {colorById} from '../styles/colors';
import Format from '../components/Format';
import STRINGS from '../util/strings';

const ItemList = ({id, type, title, value, percentage}) => {
  const getColor = (id) => {
    switch (id) {
      case 1:
        return colorById.funds;
      case 2:
        return colorById.pension;
      case 3:
        return colorById.postFixedIncome;
      case 4:
        return colorById.treasureDirect;
      case 5:
        return colorById.savings;
      case 6:
        return colorById.preFixedIncome;
      case 7:
        return colorById.bitcoin;
      case 8:
        return colorById.stock;
      case 9:
        return colorById.debentures;
      case 10:
        return colorById.currency;
      case 11:
        return colorById.fii;
      case 12:
        return colorById.bdr;
      default:
        return;
    }
  };

  return (
    <>
      <View style={styles.itemView}>
        <Text style={[styles.itemTypeTxt, {color: getColor(id)}]}>{type}</Text>
        <View style={styles.itemTitleView}>
          <View
            style={[styles.itemPipeIdentifier, {backgroundColor: getColor(id)}]}
          />
          <Text numberOfLines={2} style={styles.itemTitleTxt}>
            {title}
          </Text>
        </View>
        <View style={styles.itemValuesView}>
          <Text style={styles.itemValuesTxt}>{STRINGS.ITEM_EQUITY}</Text>
          <Text style={styles.itemValuesTxt}>{STRINGS.ITEM_PROFITABILITY}</Text>
        </View>
        <View style={styles.itemValuesView}>
          <Text
            style={[
              styles.itemValuesTxt,
              styles.itemValueNumber,
              {color: getColor(id)},
            ]}>
            {Format.format(value)}
          </Text>
          <Text
            style={[
              styles.itemValuesTxt,
              styles.itemValueNumber,
              {color: getColor(id)},
            ]}>
            {Number(percentage / 100).toLocaleString(undefined, {
              style: 'percent',
              minimumFractionDigits: 3,
            })}
          </Text>
        </View>
      </View>
      <Divider />
    </>
  );
};

export default ItemList;
