import React from 'react'
import { connect } from 'react-redux'
import Styles from '../styles/screens/LevelsStyle'
import {
    View,
    Button
} from 'react-native'
import ButtonLevel from '../components/ButtonLevel'
import Header from '../components/Header'
import { FlatList } from 'react-native-gesture-handler'

const color = '#f43973'

class LevelsScreen extends React.Component {
    static navigationOptions = { header: null }

    constructor(props){
        super(props)

        this.levels = [1, 2, 4, 5, 7, 8, 10]
    }

    onQuestions = () => {
        this.props.navigation.navigate('Questions')
    }

    _renderRow = ({ item, index }) => {
        if (index % 2 == 0) {
            return (
                <ButtonLevel
                    onPress={this.onQuestions}
                    color={color}
                    number={item}
                    title="Introdução" />
            )
        } else {
            return (
                <View style={styles.lines}> 
                    <ButtonLevel
                        onPress={this.onQuestions}
                        color={color}
                        number={item}
                        title="Saudações" />
                    <ButtonLevel
                        onPress={this.onQuestions}
                        color={color}
                        number={item + 1}
                        title="Amigável" />    
                </View>
            )
        }
        
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header title="Aprenda" color={color} />
                <FlatList
                    keyExtractor={(item) => item.toString()}
                    style={{ flex: 1 }}
                    data={this.levels}
                    renderItem={this._renderRow} />                
            </View>
        )
    }
}

const styles = Styles()

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(null, null)(LevelsScreen)