import {StyleSheet, Dimensions} from 'react-native';
import {color} from './colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  //Off Screens
  offScreenCointainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.primary,
  },
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
  icon: {
    height: 47,
    width: 70,
    marginTop: -12,
    resizeMode: 'cover',
  },
  headerIconLeft: {
    height: 50,
    width: 25,
  },
  headerTitleTxtView: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headerTitleTxt: {
    flex: 1,
    fontSize: 18,
    marginLeft: 20,
    color: color.text,
  },
  selected: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  //ListItem
  itemView: {
    height: 130,
    padding: 15,
    justifyContent: 'center',
    backgroundColor: color.primary,
  },
  itemTypeTxt: {
    fontWeight: 'bold',
    fontSize: 10,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  itemTitleView: {
    flexDirection: 'row',
    width: width - 70,
    marginBottom: 5,
  },
  itemPipeIdentifier: {
    height: 30,
    width: 5,
    marginRight: 5,
    borderRadius: 10,
  },
  itemTitleTxt: {
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'uppercase',
    color: color.text,
  },
  itemValuesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemValuesTxt: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: color.text,
  },
  itemValueNumber: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  //RequestFailed
  containerImg: {
    flex: 1,
    backgroundColor: color.primary,
    justifyContent: 'center',
  },
  requestFailedImg: {
    height: 250,
    width: '100%',
    resizeMode: 'contain',
  },

  //Wallet
  searchBarView: {
    height: height / 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.ice,
  },
  searchBar: {
    width: width / 1.2,
    height: 40,
    borderRadius: 30,
  },
});

export default styles;
