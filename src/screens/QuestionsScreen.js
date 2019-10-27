import React from 'react'
import { connect } from 'react-redux'
import {
    BackHandler,
    View,
    Text,
    ActivityIndicator,
    TouchableOpacity,
    FlatList
} from 'react-native'
import Video from 'react-native-video'
import Header from '../components/Header'
import Styles from '../styles/screens/QuestionsStyle'
import { getQuestions, putQuestions } from '../store/actions/questions'
import { setMessage } from '../store/actions/message'
import video1 from '../assets/videos/um.mp4'
import video2 from '../assets/videos/dois.mp4'
import video3 from '../assets/videos/tres.mp4'

const color = '#f43973'

class QuestionsScreen extends React.Component {
    static navigationOptions = { header: null }

    constructor(props) {
        super(props)

        this.state = {
            questionNumber: 0,
            response: ''
        }
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
        this.props.getQuestions()
    }

    componentWillUnmount() {
        this.backHandler.remove()
    }

    handleBackPress = () => {
        this.goBack()
        return true
    }

    goBack = () => {
        this.props.navigation.navigate('Tabs')
    }

    reply = () => {
        if (this.props.questions.length > this.state.questionNumber && this.state.response) {
            const lastQuestion = this.state.questionNumber == this.props.questions.length - 1

            if (this.state.response === this.props.questions[this.state.questionNumber].CorrectAlternative) {
                this.props.putQuestions(this.props.questions[this.state.questionNumber].Points)
                if (lastQuestion) {
                    this.props.setMessage('Eba', 'Parabéns, você liberou um novo nível!')
                }
            } else {
                this.props.setMessage('Ops', 'Essa não é a alternativa correta. Tente novamente para prosseguir.')
                return
            }

            if (lastQuestion) {
                this.goBack()
            } else {
                this.setState({
                    response: '',
                    questionNumber: this.state.questionNumber + 1
                })
            }
        }
    }

    setReply = (response) => {
        this.setState({
            response
        })
    }

    _renderRow = ({ item, index }) => {
        let styleToAdd = [styles.option]
        let styleDesc = [{ textAlign: 'center' }]
        if (item.Alternative == this.state.response) {
            styleToAdd.push(styles.selected)
            styleDesc.push(styles.textSelected)
        }

        return (
            <TouchableOpacity style={styleToAdd} onPress={() => this.setReply(item.Alternative)} key={index.toString()}>
                <Text style={styleDesc}>{item.Description}</Text>
            </TouchableOpacity>
        )
    }

    _renderQuestion = () => {
        const question = this.props.questions.length == 0 ? null : this.props.questions[this.state.questionNumber]
        const buttonDisable = !(this.props.questions.length > this.state.questionNumber && this.state.response)
        if (!this.props.isLoading && question) {
            let uri
            if (question.id == 1) {
                uri = video1
            } else if (question.id == 2) {
                uri = video2
            } else if (question.id == 3) {
                uri = video3
            }
            console.log(uri)

            return (
                <View style={styles.container}>
                    <Text style={styles.title}>{question.description}</Text>
                    <View style={styles.containerVideo}>
                        <Video
                            style={styles.backgroundVideo}
                            source={{ uri }}
                            repeat={true}
                            ref={(ref) => { this.player = ref }} />
                    </View>
                    <View style={styles.containerList}>
                        <FlatList
                            data={question.responses}
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={2}
                            renderItem={this._renderRow} />
                        <View style={styles.containerButton}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: color,
                                    alignItems: 'center',
                                    padding: 10,
                                    borderRadius: 70,
                                    opacity: buttonDisable ? 0.7 : 1
                                }}
                                disabled={buttonDisable}
                                onPress={() => this.reply()}>
                                <Text style={{ color: 'white' }}>Próximo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            )
        } else {
            return (
                <ActivityIndicator size="large" />
            )
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header title="Perguntas" color={color} />
                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                    {this._renderQuestion()}
                </View>
            </View>
        )
    }
}

const styles = Styles(color)

const mapStateToProps = ({ questions }) => ({
    questions: questions.data,
    isLoading: questions.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    getQuestions: () => dispatch(getQuestions()),
    putQuestions: (p) => dispatch(putQuestions(p)),
    setMessage: (title, text) => dispatch(setMessage({ title, text }))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsScreen)