import React from 'react'
import { connect } from 'react-redux'
import {
    View,
    Image,
    Text,
    TextInput
} from 'react-native'
import AnimateLoadingButton from 'react-native-animate-loading-button'
import Styles from '../styles/screens/SignInStyle'
import { login } from '../store/actions/user'

class SignInScreen extends React.Component {
    static navigationOptions = { header: null }

    constructor(props){
        super(props)

        this.state = {
            email: 'marcelo@gmail.com',
            password: '123'
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.user.isLoading && this.props.user.isLoading == false) {
            this.loadingButton.showLoading(false);
        }
        if (prevProps.user.id == null && this.props.user.id != null) {
            console.log('redirect');
            this.props.navigation.navigate('Tabs');
        }
    }

    login = () => {
        this.loadingButton.showLoading(true)
        this.props.onLogin({ ...this.state })
    }

    render() {
        const logo = require('../assets/logo.png');
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.iconImage} />
                <View style={styles.containerInput}>
                    <Text>E-mail</Text>
                    <TextInput placeholder='Digite seu e-mail' style={styles.input}
                        keyboardType='email-address' value={this.state.email}
                        onChangeText={email => this.setState({ email })} />
                </View>
                <View style={styles.containerInput}>
                    <Text>Senha</Text>
                    <TextInput placeholder='Digite sua senha' style={styles.input}
                        secureTextEntry={true} value={this.state.password}
                        onChangeText={password => this.setState({ password })} />
                </View>
                <View style={styles.containerButtons}>
                    <AnimateLoadingButton
                        ref={c => (this.loadingButton = c)}
                        width={300}
                        height={50}
                        title="Entrar"
                        titleFontSize={20}
                        titleColor="rgb(255,255,255)"
                        backgroundColor="#08b3aa"
                        borderRadius={100}
                        onPress={this.login.bind(this)}/>
                </View>
                <View style={styles.containerButtons}>
                    <AnimateLoadingButton
                        ref={c => {}}
                        width={300}
                        height={50}
                        title="Registrar"
                        titleFontSize={20}
                        titleColor="rgb(255,255,255)"
                        backgroundColor="#08b3aa"
                        borderRadius={100}
                        onPress={this.login.bind(this)}/>
                </View>
            </View >
        )
    }
}

const styles = Styles()

const mapStateToProps = ({ user }) => ({
    user
})

const mapDispatchToProps = (dispatch) => ({
    onLogin: user => dispatch(login(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)