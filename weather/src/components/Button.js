import styled from 'styled-components/native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export const ContainerButton = styled.View`
    width: ${wp('100%')};
    height: ${hp('30%')};
    background-color: #FFF;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})`
    width: ${wp('70%')};
    height: ${hp('12%')};
    border-radius: ${wp('3%')};
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: #2F2E41;
`;

export const Title = styled.Text`
    font-size: ${wp('8%')};
    letter-spacing: ${wp('0.2%')};
    color: #EAEDF1;
`;