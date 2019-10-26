import React from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    Button
} from 'react-native'

class HomeScreen extends React.Component {
    static navigationOptions = { header: null }

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View>
                <Text>Hackathon 2019</Text>
                <Button title="Tradutor" onPress={() => this.props.navigation.navigate('Translator')} />
            </View>
        )
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(null, null)(HomeScreen)