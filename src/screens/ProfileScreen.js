import React from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text
} from 'react-native'

class ProfileScreen extends React.Component {
    static navigationOptions = { header: null }

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>ProfileScreen</Text>
            </View>
        )
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(null, null)(RegisterScreen)