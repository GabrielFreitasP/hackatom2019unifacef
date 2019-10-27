import React from 'react'
import { connect } from 'react-redux'
import Styles from '../styles/screens/SplashStyle'
import {
    View,
    Text,
} from 'react-native'

class SplashScreen extends React.Component {
    static navigationOptions = { header: null }

    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProps) {
        // if (prevProps.company && prevProps.company.isLoading && this.props.company && !this.props.company.isLoading) {
        //     if (this.props.company.key) {
        //         this.props.navigation.navigate('App');
        //     } else {
        //         this.props.navigation.navigate('Auth');
        //     }
        // }
    }

    componentDidMount() {
        if (this.props.user.id) {
            this.props.navigation.navigate('Questions');
        } else {
            this.props.navigation.navigate('SignIn');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>SplashScreen</Text>
            </View>
        )
    }
}

const styles = Styles()

const mapStateToProps = ({ user }) => ({
    user
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, null)(SplashScreen)