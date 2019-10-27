import React from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    Button
} from 'react-native'
import Header from '../components/Header'

const color = '#f43973'

class QuestionsScreen extends React.Component {
    static navigationOptions = { header: null }

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header title="Perguntas" color={color} />
                <View>
                    <Text>Perguntas</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(null, null)(QuestionsScreen)