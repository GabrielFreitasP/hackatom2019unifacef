import { StyleSheet } from 'react-native'

export default ()  => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerVideo: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        width: 268,
        height: 201
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    textInput: {
        borderWidthBottom: 1,
        flex: 1,
        borderColor: 'black',
    }
})