import { StyleSheet } from 'react-native'


export default (color) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    containerVideo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 201,
    },
    backgroundVideo: {
        backgroundColor: 'black',
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
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 70,
        paddingTop: 10,
        paddingBottom: 10,
        paddingStart: 20,
        paddingEnd: 20,
        margin: 10
    },
    containerList: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    containerButton: {
        padding: 20,
        width: '90%'
    },
    button: {
        backgroundColor: color,
        alignItems: 'center',
        padding: 10,
        borderRadius: 70,
    }
})