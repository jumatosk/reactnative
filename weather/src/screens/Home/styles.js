import { StyleSheet, Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 30px;
    color: #ececde;
    margin-bottom: 20px;
`;

export default StyleSheet.create({
    linerGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: Dimensions.get('window').height * 2
    },
    searchBar: {
        marginHorizontal: 10,
    }
})