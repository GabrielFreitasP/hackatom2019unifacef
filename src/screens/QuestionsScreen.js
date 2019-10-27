import React from 'react'
import { connect } from 'react-redux'
import {
    BackHandler,
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

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    
    componentWillUnmount() {
        this.backHandler.remove()
    }

    handleBackPress = () => {
        this.goBack(); // works best when the goBack is async
        return true;
    }
      
    goBack = () => {
        this.props.navigation.navigate('Tabs')
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