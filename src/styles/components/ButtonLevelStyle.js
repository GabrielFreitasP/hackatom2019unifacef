import { StyleSheet } from 'react-native'

const size = 100
const sub = 25

export default (color) => StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ddd',
        borderWidth: 6,
        height: size,
        width: size,
        borderTopStartRadius: size,
        borderTopEndRadius: size,
        borderBottomStartRadius: size,
        borderBottomEndRadius: size,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color,
        height: size - sub,
        width: size - sub,
        borderTopStartRadius: size - sub,
        borderTopEndRadius: size - sub,
        borderBottomStartRadius: size - sub,
        borderBottomEndRadius: size - sub,
    },
    icon: {
        color: 'white',
        fontSize: 30,
        letterSpacing: 2,
        fontWeight: 'bold',
    },
    text: {
        marginTop: 5,
        color: '#666',
        fontWeight: 'bold',
        fontSize: 18,
    }
})