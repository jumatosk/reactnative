import React, { useState } from 'react'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import {
    Container,
    ContainerImg,
    Illustration,
} from './styles'
import {
    ContainerButton,
    Button,
    Title
} from '../../components/Button'
import weatherImg from '../../assets/weather.png'

import STRINGS from '../../utils/Strings'
import GLOBAL from '../../global'

export default ({ navigation }) => {
    return (
        <Container>
            <ContainerImg>
                <Illustration source={weatherImg} resizeMode={GLOBAL.image.resizeMode} />
            </ContainerImg>
            <ContainerButton>
                <Button onPress={() => navigation.navigate('Weather')}>
                    <Title>{STRINGS.HOME_TITLE}</Title>
                    <Icon name='login' size={GLOBAL.icon.size} color={GLOBAL.icon.color} />
                </Button>
            </ContainerButton>
        </Container>
    )
}
