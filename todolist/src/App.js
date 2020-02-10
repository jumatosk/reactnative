import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ToDo from './componentes/ToDo';

const App = () => <ToDo/>

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  lista:{
    margin: 24,
  }
})
