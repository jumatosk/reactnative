import React from 'react'
import {Container, TabsContainer, TabItem, TabText} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Tabs({ translateY }){
    return (
    <Container style={{
        transform: [{
            translateY: translateY.interpolate({
                inputRange: [0, 380],
                outputRange: [0, 30],
                extrapolate: 'clamp',
            })
        }],
        opacity: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [1, 0.3],
            extrapolate: 'clamp'
        })
    }}>
        <TabsContainer>
            <TabItem>
                <Icon name="person-add" size={24} color="#fff" />
                <TabText>Inidicar Amigos</TabText>
            </TabItem>
            <TabItem>
                <Icon name="attach-money" size={24} color="#fff" />
                <TabText>Cobrar</TabText>
            </TabItem>
            <TabItem>
                <Icon name="arrow-downward" size={24} color="#fff" />
                <TabText>Depositar</TabText>
            </TabItem>
            <TabItem>
                <Icon name="arrow-upward" size={24} color="#fff" />
                <TabText>Transferir</TabText>
            </TabItem>
            <TabItem>
                <Icon name="lock-open" size={24} color="#fff" />
                <TabText>Bloquear Cartão</TabText>
            </TabItem>
            <TabItem>
                <Icon name="credit-card" size={24} color="#fff" />
                <TabText>Cartão Virtual</TabText>
            </TabItem>
        </TabsContainer>
    </Container>
    )
}