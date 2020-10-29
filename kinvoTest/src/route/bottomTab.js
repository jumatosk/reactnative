import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {color} from '../styles/colors';
import Icon from '../components/bottomTabIcon';

import Resume from '../screens/resume';
import Wallet from '../screens/wallet';
import Plus from '../screens/plus';
import Premium from '../screens/premium';
import Account from '../screens/account';

const Tab = createMaterialBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Carteira"
        keyboardHidesNavigationBar={true}
        barStyle={{
          backgroundColor: color.primary,
        }}
        labeled={false}>
        <Tab.Screen
          name="Resumo"
          component={Resume}
          options={{
            tabBarIcon: () => <Icon name="resume" />,
          }}
        />
        <Tab.Screen
          name="Carteira"
          component={Wallet}
          options={{
            tabBarIcon: () => <Icon name="wallet" />,
          }}
        />
        <Tab.Screen
          name="Plus"
          component={Plus}
          options={{
            tabBarIcon: () => <Icon name="plus" />,
          }}
        />
        <Tab.Screen
          name="Premium"
          component={Premium}
          options={{
            tabBarIcon: () => <Icon name="premium" />,
          }}
        />
        <Tab.Screen
          name="Conta"
          component={Account}
          options={{
            tabBarIcon: () => <Icon name="account" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
