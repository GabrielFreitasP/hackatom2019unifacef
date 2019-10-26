import React from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text
} from 'react-native'

class SignInScreen extends React.Component {
    static navigationOptions = { header: null }

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View>
                <Text>SignInScreen</Text>
            </View>
        )
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)