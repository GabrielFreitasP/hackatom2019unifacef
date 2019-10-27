import React from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Styles from '../styles/screens/ProfileStyle'
import { logout } from '../store/actions/user'

class ProfileScreen extends React.Component {
    static navigationOptions = { header: null }

    constructor(props){
        super(props)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.user.isLoading && this.props.user.isLoading == false) {
            this.loadingButton.showLoading(false);
        }
        if (prevProps.user.id != null && this.props.user.id == null) {
            this.props.navigation.navigate('SingIn');
        }
    }

    logout = () => {
        this.props.onLogout()
    }

    render() {
        let user = require('../assets/user.jpg')
        if (this.props.user.photo && this.props.user.photo != '') {
            user = { uri: this.props.user.photo }
        }
        console.log(user);
        return (
            <>
                <View style={{ flex: 1 }}>
                    <View style={styles.containerHeader}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.containerImageUser}>
                                <Image source={user} style={styles.imageUser}/>
                            </View>
                            <View>
                                <Text style={styles.textPoints}>{this.props.user.points} pontos</Text>                                
                            </View>
                        </View>
                        <Text style={[styles.textEmail, { marginTop: 20 }]}>{this.props.user.email}</Text>
                        <Text style={styles.textName}>{this.props.user.name}</Text>
                    </View>
                </View>
                
                <View style={styles.containerScrollView} vertical>
                    <View style={styles.containerExit}>
                        <TouchableOpacity style={styles.containerButtonBottom} onPress={this._logout}>
                            <Icon name='sign-out' size={20} color={'#822fa8'} style={styles.iconButton} />
                            <Text style={{...styles.font16, color: '#822fa8' }}>SAIR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        )
    }
}

const styles = Styles('#822fa8')

const mapStateToProps = ({ user }) => ({
    user
})

const mapDispatchToProps = (dispatch) => ({
    onLogout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)