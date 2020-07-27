import { StyleSheet, Dimensions } from 'react-native'
import styled from 'styled-components/native/'

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const WeatherInformation = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const City = styled.Text`
    font-size: 32px;
    color: #ececde;
`;

export const TemperatureContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 25px;
`;

export const Temperature = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: #ececde;
    margin-left: 10px;
`;

export const TemperatureVariation = styled.Text`
    font-size: 20px;
    color: #ececde;
    margin: 10px;
`;

export const Button = styled.View`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    align-self: flex-start;
    margin-left: 20px;
    margin-top: 50px;
`;

export const WarningContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Warning = styled.Text`
    font-size: 30px;
    color: #ececde;
    text-align: center;
`;

export default StyleSheet.create({
    linerGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: Dimensions.get('window').height * 2
    }
})