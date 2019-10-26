import React from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    Button
} from 'react-native'

class HomeInScreen extends React.Component {
    static navigationOptions = { header: null }

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View>
                <Text>HomeInScreen</Text>
                <Button title="Entrar" onPress={() => this.props.navigation.navigate('Home')} />
            </View>
        )
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(null, null)(HomeInScreen)