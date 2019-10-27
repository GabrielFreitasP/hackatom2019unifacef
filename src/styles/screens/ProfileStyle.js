import { StyleSheet, Platform } from 'react-native'

export default (color) => StyleSheet.create({
    containerHeader: {
        backgroundColor: color,
        padding: 20,
    },
    iconClose: {
        color: '#fff',
        padding: 15,
        textAlign: 'right',
    },
    containerImageUser: {
        width: 100,
        height: 100,
        borderRadius: 70,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageUser: {
        width: 95,
        height: 95,
        borderRadius: 68,
    },
    textPoints: {
        marginTop: 50,
        marginLeft: 50,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    textName: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    textEmail: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    textDate: {
        color: '#fff',
        fontSize: 12,
    },
    containerScrollView: {
        margin: 12,
    },
    containerButton: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%', 
        borderBottomWidth: 1,
        borderBottomColor: '#fafafa',      
    },
    containerButtonBottom: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',     
    },
    iconButton: {
        textAlign: 'center',
        width: 20,
        marginRight: 20
    },
    iconRight: { 
        color: color,
        position: 'absolute',
        top: 20,
        right: 20,
    },
    textButton: {
        fontSize: 20,
    },
    font10: {
        fontSize: 10,
    },
    font11: {
        fontSize: 11,
    },
    font12: {
        fontSize: 12,
    },
    font13: {
        fontSize: 13,
    },
    font14: {
        fontSize: 14,
    },
    font15: {
        fontSize: 15,
    },
    font16: {
        fontSize: 16,
    },
    font17: {
        fontSize: 17,
    },
    font18: {
        fontSize: 18,
    },
    font19: {
        fontSize: 19,
    },
    font20: {
        fontSize: 20,
    },
    containerExit: {
        marginBottom: 12,
        marginStart: 12,
        marginEnd: 12,
        marginTop: 20,
    },
})