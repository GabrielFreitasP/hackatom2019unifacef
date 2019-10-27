import { StyleSheet, Platform } from 'react-native'

export default (color) => StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        width: '100%',
        alignItems: 'center',
        backgroundColor: color,
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    title: {
        color: 'white',
        fontSize: 20,
    },
})