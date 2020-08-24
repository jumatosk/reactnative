import styled from 'styled-components/native/'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFF;
`;

export const ContainerLoading = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const TemperatureBackground = styled.Image`
    width: ${wp('100%')};
    height: ${hp('45%')};
`;

export const ContainerInformation = styled.View`
    height: ${hp('25%')};
    width: ${wp('100%')};
    flex-direction: row;
    align-self: center;
    justify-content: space-evenly;
`;

export const ContainerTemperature = styled.View`
    width: ${wp('35%')};
    height: ${hp('25%')};
    align-items: center;
    justify-content: center;
`;

export const ContainerDate = styled.View`
    width: ${wp('40%')};
    height: ${hp('25%')};
    align-items: center;
    justify-content: center;
`;

export const WeekDay = styled.Text`
    font-size: ${wp('8%')};
    font-weight: bold;
    letter-spacing: ${wp('0.25%')};
    color: #2F2E41;
`;

export const DayMonth = styled.Text`
    font-size: ${wp('5%')};
    text-align: center;
    margin-top: ${wp('1%')};
    color: #2F2E41;
`;

export const Temperature = styled.Text`
    font-size: ${wp('10%')};
    font-weight: bold;
    color: #2F2E41;
`;

export const TemperatureVariation = styled.Text`
    font-size: ${wp('5%')};
    text-align: center;
    color: #2F2E41;
`;

export const City = styled.Text`
    margin-top: ${wp('7%')};
    font-size: ${wp('10%')};
    font-weight: bold;
    text-align: center;
    letter-spacing: ${wp('0.4%')};
    color: #2F2E41;
`;

export const ContainerWarning = styled.View`
    margin-top: ${wp('10')};
    height: ${hp('55%')};
    width: ${wp('90%')};
    justify-content: space-evenly;
    align-self: center;
    align-items: center;
`;

export const WarningImage = styled.Image`
    width: ${wp('100%')};
    height: ${hp('45%')}
`;

export const WarningTitle = styled.Text`
    color: #2F2E41;
    text-align: center;
    font-size: ${wp('7%')};
    font-weight: bold;
    letter-spacing: ${wp('0.2%')};
`;
