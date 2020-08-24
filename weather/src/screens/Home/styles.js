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


