import React, { useState } from 'react'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import {
    Container,
    ContainerImg,
    Illustration,
    ContainerButton,
    Button,
    Title
} from './styles'
import weatherImg from '../../assets/weather.png'
import STRINGS from '../../utils/Strings'

export default ({ navigation }) => {
    return (
        <Container>
            <ContainerImg>
                <Illustration source={weatherImg} resizeMode='contain'/>
            </ContainerImg>
            <ContainerButton>
                <Button onPress={() => navigation.navigate('Weather')}>
                    <Title>{STRINGS.HOME_TITLE}</Title>
                    <Icon name='login' size={30} color='#EAEDF1'/>
                </Button>
            </ContainerButton>
        </Container>
    )
}
