import { StyleSheet, Dimensions } from 'react-native'

export default ()  => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconImage: {        
        marginBottom: 50,
        width: '100%',
        height: 200
    },
    containerInput: {
        width: '80%',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },
    containerButtons: {
        width: '80%',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textForgotPassword: {
        fontSize: 15,
        marginTop: 20,
    },
})