import React from 'react'
import { connect } from 'react-redux'
import Styles from '../styles/screens/TranslatorStyle'
import {
    View,
    Text,
    TextInput,
    ActivityIndicator,
    Button
} from 'react-native'
import Video from 'react-native-video';
import { translate, clearTranslator } from '../store/actions/translator'

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
        this.translate(this.state.text)
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
                    <View style={styles.containerVideo}>
                        <Video 
                            style={styles.backgroundVideo}
                            source={{ uri: this.props.translator.url }}
                            repeat={true}
                            ref={(ref) => { this.player = ref }} />
                    </View>
                )
            }
        }
        
        return (
            <Text>Digite algo a baixo para traduzir em libras</Text>
        )        
    }

    render() {
        return (
            <View style={styles.container}>                
                { this.renderVideo() }
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.onChangeText(text)}
                    value={this.state.text} />
                <Button title="Buscar" onPress={() => this.onPress()} />
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