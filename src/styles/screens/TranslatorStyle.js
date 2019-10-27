import { StyleSheet } from 'react-native'

export default ()  => StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    containerVideo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 240,
        height: 180,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    textInfo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    containerInput: {
        width: '100%',
        marginTop: 20,
        padding: 10,
        flexDirection: 'row',
        alignContent: 'space-around',
    },
    input: {
        flex: 1,
        height: 40,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginEnd: 20,
    }
})