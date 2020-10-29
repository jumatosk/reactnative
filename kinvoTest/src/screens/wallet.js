import React, {useState, useEffect} from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Searchbar} from 'react-native-paper';

import AppStatusBar from '../components/AppStatusBar';
import MyHeader from '../components/MyHeader';
import ItemList from '../components/ItemList';
import RequestFailed from '../components/RequestFailed';
import styles from '../styles';
import {color} from '../styles/colors';

import api from '../services/api';

const Wallet = () => {
  const [data, setData] = useState([]);
  const [resultSearch, setResultSearch] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [requestFailed, setRequestFailed] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await api.get();

      if (response.data.success) {
        const {data} = response.data;
        setData(data);
      }
    } catch (error) {
      setRequestFailed(true);
    }
    setLoading(false);
  };

  const doSearch = () => {
    const result = data.filter((item) => {
      const itemData = `${item.productName.toUpperCase()}`;
      const textData = search.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    setResultSearch(result);
  };

  return (
    <>
      <AppStatusBar />
      <MyHeader />
      <View style={styles.container}>
        <View style={styles.searchBarView}>
          <Searchbar
            value={search}
            onChangeText={(search) => {
              setSearch(search), doSearch();
            }}
            icon={() => (
              <FontAwesome name="search" size={20} color={color.whiteIce} />
            )}
            style={styles.searchBar}
          />
        </View>
        {!loading && !requestFailed && (
          <ScrollView>
            {search.length === 0 &&
              data.map((product, index) => (
                <ItemList
                  key={index}
                  id={product.productTypeId}
                  title={product.productName}
                  type={product.financialInstitutionName}
                  value={product.equity}
                  percentage={product.profitability}
                />
              ))}
            {resultSearch.length > 0 &&
              resultSearch.map((product, index) => (
                <ItemList
                  key={index}
                  id={product.productTypeId}
                  title={product.productName}
                  type={product.financialInstitutionName}
                  value={product.equity}
                  percentage={product.profitability}
                />
              ))}
          </ScrollView>
        )}
        {loading && <ActivityIndicator color={color.activity} size="large" />}
        {!loading && requestFailed && <RequestFailed />}
      </View>
    </>
  );
};

export default Wallet;
