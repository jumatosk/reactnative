import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Linking } from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

import {
    Container,
    ContainerLoading,
    ContainerInformation,
    WeekDay,
    DayMonth,
    ContainerTemperature,
    Temperature,
    TemperatureVariation,
    TemperatureBackground,
    ContainerDate,
    City,
    ContainerWarning,
    WarningImage,
    WarningTitle,
} from './styles'
import {
    ContainerButton,
    Button,
    Title
} from '../../components/Button'

import weatherInformation from '../../assets/information.png'
import temperatureBackground from '../../assets/weatherBackground.png'
import warningImg from '../../assets/warning.png'

import STRINGS from '../../utils/Strings'
import GLOBAL from '../../global'

import * as Location from 'expo-location'
import api from '../../services/api'
import weatherKey from '../../utils/apiKey'

export default ({ navigation }) => {
    const [weather, setWeather] = useState({})
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [day, setDay] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [permission, setPermission] = useState('')
    const [loading, setLoading] = useState(true)
    let date = new Date()

    useEffect(() => {
        (async () => {
            let { status } = (await Location.getPermissionsAsync())
            setPermission(status)
        })()

        weekDay(date.getDay())
    }, [])

    useEffect(() => {
        const getCoords = async () => {
            try {
                let latitude = ((await Location.getCurrentPositionAsync({})).coords.latitude)
                let longitude = ((await Location.getCurrentPositionAsync({})).coords.longitude)

                setLatitude(latitude);
                setLongitude(longitude)
            } catch (error) {
                console.log(error)
            }
        }
        getCoords()
        setLoading(false)
    }, [])

    const weekDay = (day) => {
        switch (day) {
            case 0: setDay(STRINGS.SUNDAY)
                break
            case 1: setDay(STRINGS.MONDAY)
                break
            case 2: setDay(STRINGS.TUESDAY)
                break
            case 3: setDay(STRINGS.WEDNESDAY)
                break
            case 4: setDay(STRINGS.THURSDAY)
                break
            case 5: setDay(STRINGS.FRIDAY)
                break
            case 6: setDay(STRINGS.SATURDAY)
                break
        }
    }

    const getWeatherData = async () => {
        setLoading(true)
        try {
            const response = await api.get(`?lat=${latitude}&lon=${longitude}&units=metric&appid=${weatherKey.apiKey}`)

            const {
                main,
                name,
                sys,
            } = response.data

            setWeather(main)
            setCity(name)
            setCountry(sys.country)

        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    return (
        <>
            {
                permission == 'granted' && !loading && city != '' &&
                <Container>
                    <ContainerInformation>
                        <ContainerDate>
                            <WeekDay>{day}</WeekDay>
                            <DayMonth>{date.getDate()}/{date.getMonth() + 1}</DayMonth>
                        </ContainerDate>
                        <ContainerTemperature>
                            <Temperature>{weather.temp}°</Temperature>
                            <TemperatureVariation>
                                Feels like {weather.feels_like}°
                            </TemperatureVariation>
                        </ContainerTemperature>
                    </ContainerInformation>
                    <TemperatureBackground source={weatherInformation} resizeMode={GLOBAL.image.resizeMode} />
                    <TemperatureVariation>
                        Min {weather.temp_min}° / Max {weather.temp_max}°
                    </TemperatureVariation>
                    <City>{city}, {country}</City>
                </Container>
            }
            {
                permission != 'granted' && !loading &&
                <Container>
                    <ContainerWarning>
                        <WarningTitle>{STRINGS.WARNING_TITLE}</WarningTitle>
                        <WarningImage source={warningImg} resizeMode={GLOBAL.image.resizeMode} />
                    </ContainerWarning>
                    <ContainerButton>
                        <Button onPress={() => Linking.openSettings()}>
                            <Icon name='pin' size={GLOBAL.icon.size} color={GLOBAL.icon.color} />
                            <Title>{STRINGS.WARNING_BACK}</Title>
                        </Button>
                    </ContainerButton>
                </Container>
            }
            {
                permission == 'granted' && !loading && city == '' &&
                <Container>
                    <ContainerWarning>
                        <WarningTitle>{STRINGS.WARNING_INFO}</WarningTitle>
                        <WarningImage source={warningImg} resizeMode={GLOBAL.image.resizeMode} />
                    </ContainerWarning>
                    <ContainerButton>
                        <Button onPress={getWeatherData}>
                            <Title>Try again</Title>
                        </Button>
                    </ContainerButton>
                </Container>
            }
            {
                loading &&
                <ContainerLoading>
                    <ActivityIndicator
                        color={GLOBAL.loading.color}
                        size={GLOBAL.loading.size}
                        animating={GLOBAL.loading.animating}
                    />
                </ContainerLoading>
            }
        </>
    )
}