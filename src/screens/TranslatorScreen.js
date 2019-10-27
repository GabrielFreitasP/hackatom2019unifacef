import React from 'react'
import { connect } from 'react-redux'
import Styles from '../styles/screens/TranslatorStyle'
import {
    View,
    TextInput,
    ActivityIndicator,
    Button, 
    Text
} from 'react-native'
import Video from 'react-native-video'
import Header from '../components/Header'
import { translate, clearTranslator } from '../store/actions/translator'

const color = '#08b3aa'

class TranslatorScreen extends React.Component {
    static navigationOptions = { header: null }    

    constructor(props){
        super(props)

        this.state = {            
            text: 'Hackaton'
        }
    }

    componentDidMount = () => {
        this.props.clearTranslator()
        // this.translate(this.state.text)
    }

    translate = (text) => {
        if (this.props.translator && this.props.translator.isLoading) return
        this.props.translate(text)
    }

    onChangeText = (text) => {
        this.setState({ text })
    }

    onPress = () => {
        this.setState({ waiting: false })
        this.translate(this.state.text)
    }

    renderVideo = () => {
        if (this.props.translator) {            
            if (this.props.translator.isLoading) {
                return (
                    <ActivityIndicator size="large" />
                )
            } else if (this.props.translator.url) {
                return (
                    <Video 
                        style={styles.backgroundVideo}
                        source={{ uri: this.props.translator.url }}
                        repeat={true}
                        ref={(ref) => { this.player = ref }} />
                )
            } else {
                return (
                    <Text>Digite algo a baixo para traduzir em libras</Text>
                )
            }
        } else {
            return (
                <Text>Digite algo a baixo para traduzir em libras</Text>
            )
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header title="Tradutor" color={color} />
                <View style={styles.container}>
                    <View style={styles.containerVideo}>
                        { this.renderVideo() }
                    </View>
                    <View style={styles.containerInput}>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => this.onChangeText(text)}
                            value={this.state.text} />
                        <Button
                            color={color}
                            title="Traduzir"
                            onPress={() => this.onPress()} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = Styles()

const mapStateToProps = ({ translator }) => ({
    translator
})

const mapDispatchToProps = (dispatch) => ({
    translate: text => dispatch(translate(text)),
    clearTranslator: () => dispatch(clearTranslator()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TranslatorScreen)