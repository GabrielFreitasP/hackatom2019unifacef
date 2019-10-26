import { StyleSheet } from 'react-native'

export default ()  => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
    },
})