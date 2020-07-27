import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

import {
    Container,
    WeatherInformation,
    City,
    TemperatureContainer,
    Temperature,
    TemperatureVariation,
    Button,
    WarningContainer,
    Warning,
} from './styles'

import GLOBAL from '../../global'
import STRINGS from '../../utils/Strings'
import api from '../../services/api'
import weatherKey from '../../utils/apiKey'
import styles from './styles'

export default ({ navigation, route }) => {
    const [weather, setWeather] = useState({})
    const [error, setError] = useState(false)
    const [city, setCity] = useState()
    const [loading, setLoading] = useState(true)
    const search = route.params.searchText

    const getWeatherData = async () => {
        try {
            const response = await api.get(`?q=${search}&units=metric&appid=${weatherKey.apiKey}`)

            const {
                main,
                name,
            } = response.data

            setWeather(main)
            setCity(name)

        } catch (error) {
           setError(true)
        }
        setLoading(false)
    }

    useEffect(() => {
        getWeatherData()
    }, [])

    return (
        <Container>
            <LinearGradient
                colors={GLOBAL.linearGradientConfig}
                style={styles.linerGradient}
            />
            <Button>
                <Icon name='keyboard-backspace'
                    size={35} color="#eee"
                    onPress={() => navigation.goBack()}
                />
            </Button>
            {
                !loading && !error &&
                <WeatherInformation>
                    <TemperatureContainer>
                        <Icon name="weather-night-partly-cloudy" size={30} color="#ececde" />
                        <Temperature>
                            {weather.temp} °C
                    </Temperature>

                    </TemperatureContainer>
                    <TemperatureVariation>Mínima {weather.temp_min}°C</TemperatureVariation>
                    <TemperatureVariation>Máxima {weather.temp_max}°C</TemperatureVariation>
                    <City>{city}</City>
                </WeatherInformation>
            }
            {
                !loading && error &&
                <WarningContainer>
                    <Warning>{STRINGS.search_error}</Warning>
                </WarningContainer>
            }
            {
                loading &&
                <ActivityIndicator size='large' color='#ececde' />
            }
        </Container>
    )
}