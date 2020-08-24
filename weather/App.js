import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'

import * as Location from 'expo-location'

import GLOBAL from './src/global'
import Main from './src/routes/route'

const AppContainer = () => {
  return (
    <>
      <StatusBar
        backgroundColor={GLOBAL.statusBar.color}
        style={GLOBAL.statusBar.style}
      />
      <App />
    </>
  )
}

const App = () => {
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    try {
      (async () => {
        let { status } = await Location.requestPermissionsAsync()

        if (status !== 'granted') {
          setErrorMsg('Permission denied.')
        }
      })()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return <Main />
}

export default AppContainer