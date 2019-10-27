import { StyleSheet } from 'react-native'

export default (colorPrimary) => StyleSheet.create({    
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