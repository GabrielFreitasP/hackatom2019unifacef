import React from 'react'
import { connect } from 'react-redux'
import Styles from '../styles/screens/TranslatorStyle'
import {
    View,
    TextInput,
    ActivityIndicator,
    Button,
    Text,
    TouchableOpacity
} from 'react-native'
import Video from 'react-native-video'
import Header from '../components/Header'
import Icon from 'react-native-vector-icons/FontAwesome'
import { translate, clearTranslator } from '../store/actions/translator'

const color = '#08b3aa'

class TranslatorScreen extends React.Component {
    static navigationOptions = { header: null }

    constructor(props) {
        super(props)

        this.state = {
            text: 'Hackaton',
            paused: false
        }
    }

    componentDidMount = () => {
        this.props.clearTranslator()
        this.setState({ paused: false })
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

    renderPause = () => {
        if (this.state.paused) {
            return (
                <Icon size={25} name='play' />
            )
        } else {
            return (
                <Icon size={25} name='pause' />
            )
        }
    }

    renderVideo = () => {
        const text = 'Digite algo a baixo para traduzir em libras'
        if (this.props.translator) {
            if (this.props.translator.isLoading) {
                return (
                    <View style={styles.containerVideo}>
                        <ActivityIndicator size="large" />
                    </View>
                )
            } else if (this.props.translator.url) {
                return (
                    <View>
                        <View style={styles.containerVideo}>
                            <Video
                                style={styles.backgroundVideo}
                                source={{ uri: this.props.translator.url }}
                                repeat={true}
                                ref={(ref) => { this.player = ref }}
                                maxBitRate={2000000}
                                paused={this.state.paused}
                                fullscreen={true} />
                        </View>
                        <TouchableOpacity onPress={() => { this.setState({ paused: !this.state.paused }) }}>
                            {this.renderPause()}
                        </TouchableOpacity>
                    </View>
                )
            } else {
                return (
                    <View style={styles.containerVideo}>
                        <Text style={styles.textInfo}>{text}</Text>
                    </View>
                )
            }
        } else {
            return (
                <View style={styles.containerVideo}>
                    <Text style={styles.textInfo}>{text}</Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header title="Tradutor" color={color} />
                <View style={styles.container}>
                    {this.renderVideo()}
                    <View style={styles.containerInput}>
                        <TextInput
                            placeholder={'Digite o que deseja traduzir aqui...'}
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