import { StyleSheet } from 'react-native'


export default (color) => StyleSheet.create({
    title: {
        fontSize: 20
    },
    containerVideo: {
        backgroundColor: color,
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        height: 200,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    selected: {
        backgroundColor: color,
    },
    textSelected: {
        color: 'white'
    },
    option: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 70,
        padding: 10,
        margin: 10
    }
})