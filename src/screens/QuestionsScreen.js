import React from 'react'
import { connect } from 'react-redux'
import {
    BackHandler,
    View,
    Text,
    ActivityIndicator,
    TouchableOpacity,
    Button
} from 'react-native'
// import { WebView } from 'react-native-webview'
import Video from 'react-native-video'
import Header from '../components/Header'
import Styles from '../styles/screens/QuestionsStyle'
import { getQuestions } from '../store/actions/questions'

const color = '#f43973'

class QuestionsScreen extends React.Component {
    static navigationOptions = { header: null }

    constructor(props){
        super(props)

        this.state = {
            questionNumber: 0,
            response: ''
        }
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        this.props.getQuestions()
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

    reply = () => {
        if (this.props.questions.length > this.state.questionNumber && this.state.response) {
            this.setState({
                questionNumber: this.state.questionNumber + 1
            })
        }
    }

    setReply = (response) => {
        this.setState({
            response
        })
    }

    _renderResponses = (responses) => {
        let res = [];
        responses.forEach((response, index) => {
            let styleToAdd = [styles.option]
            let styleDesc = {}
            if (response.Alternative == this.state.response) {
                styleToAdd.push(styles.selected)
                styleDesc = styles.textSelected
            }

            res.push(
                <TouchableOpacity style={styleToAdd} onPress={() => this.setReply(response.Alternative)} key={index.toString()}>
                    <Text style={styleDesc}>{response.Description}</Text>
                </TouchableOpacity>
            )
        });

        return (
            <View style={{ alignItems: 'center', flex: 1 }}>
                {res}
                <View>
                    <Button 
                        color={color} 
                        title={'RESPONDER'} 
                        onPress={() => this.reply()}/>
                </View>
            </View>
        )
    }

    _renderQuestion = () => {
        const question = this.props.questions.length == 0 ? null : this.props.questions[this.state.questionNumber] 
        if (!this.props.isLoading && question) {
            return (
                <View style={{ flex: 1 }}>
                    {/* <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                        <ProgressBarAndroid styleAttr="Horizontal"
                            indeterminate={false}
                            progress={0.5}/>
                    </View> */}
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.title}>{question.description}</Text>
                    </View>
                    <View style={styles.containerVideo}>
                        {/* <WebView 
                            source={{uri: 'https://player.vimeo.com/video/369097167'}}
                            style={{}}/> */}
                        <Video 
                            style={styles.backgroundVideo}
                            source={{ uri: 'http://s36.filefactory.com/get/f/5isyr3jy7slr/339f3e931ef6615d/Muito_Obrigado.mp4' }}
                            repeat={true}
                            ref={(ref) => { this.player = ref }} />
                    </View>
                    {this._renderResponses(question.responses)}
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
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsScreen)