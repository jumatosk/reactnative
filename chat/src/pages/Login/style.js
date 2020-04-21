import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    image: {
        width: 240,
        height: 200,
        alignSelf: 'center'
    },
    userView: {
        marginHorizontal: 5
    },
    input: {
        fontWeight: 'bold',
        marginTop: 17,
        height: 50,
        borderRadius: 30,
        paddingHorizontal: 16,
        borderColor: '#71591c',
        borderWidth: StyleSheet.hairlineWidth,
    },
    buttonView: {
        marginHorizontal: 45,
        alignItems: 'stretch',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#7159c1',
        paddingVertical: 10,
        borderRadius: 30
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
    }
})