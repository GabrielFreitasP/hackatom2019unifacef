import React from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text
} from 'react-native'
import Header from '../components/Header'

const color = '#e55b20'

class RankingScreen extends React.Component {
    static navigationOptions = { header: null }

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header title="Ranking" color={color} />
                <View>
                    <Text>Ranking</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(null, null)(RankingScreen)