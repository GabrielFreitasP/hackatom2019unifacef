import React from 'react'
import {
    View,
    Text
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
            </View>
        )
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(null, null)(HomeInScreen)