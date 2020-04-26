import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    item: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    text: {
        fontSize: 16,
        lineHeight: 25,
        color: '#868C99',
        fontWeight: 'bold'
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})