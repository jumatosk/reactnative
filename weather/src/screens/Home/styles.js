import styled from 'styled-components/native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
`;

export const ContainerImg = styled.View`
    width: ${wp('100%')};
    height: ${hp('50%')};
`;

export const Illustration = styled.Image`
    width: ${wp('100%')};
    height: ${hp('50%')};
`;

export const ContainerButton = styled.View`
    width: ${wp('100%')};
    height: ${hp('30%')};
    align-items: center;
    justify-content: center;
`;

export const Button = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})`
    width: ${wp('80%')};
    height: ${hp('12%')};
    border-radius: ${wp('3%')};
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: #010725;
`;
export const Title = styled.Text`
    font-size: ${wp('8%')};
    letter-spacing: ${wp('0.3%')};
    color: #EAEDF1;

`;


