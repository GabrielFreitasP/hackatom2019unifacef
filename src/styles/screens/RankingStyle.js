import { StyleSheet } from 'react-native'

export default () => StyleSheet.create({
    lineTransaction: {
        width: '100%',
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    lineVertical: {
        width: 1,
        height: 25,
        backgroundColor: 'transparent'
    },
    positionContainer: {
        width: 40,
        height: 40,
        borderRadius: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    position: {
        fontSize: 18,
        color: 'white'
    }
})