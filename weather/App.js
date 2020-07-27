import React from 'react';
import { StatusBar } from 'expo-status-bar'

import GLOBAL from './src/global'
import Main from './src/routes/route'

export default () => {
  return (
    <>
      <StatusBar backgroundColor={GLOBAL.statusBar}/>
      <Main />
    </>
  )
}