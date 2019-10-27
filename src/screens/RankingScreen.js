import React from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    FlatList,
    ScrollView
} from 'react-native'
import Header from '../components/Header'
import Styles from '../styles/screens/RankingStyle'
import { getRanking } from '../store/actions/ranking'

const color = '#e55b20'

const colors = ['#e55b20', '#f43973', '#08b3aa', '#822fa8']

class RankingScreen extends React.Component {
    static navigationOptions = { header: null }

    constructor(props){
        super(props)
        this._bootstrap()
    }

    _bootstrap = () => {
        this.props.getRanking()
    }

    _renderRow = ({ item, index }) => {
        const positionColor = colors[index%4]
        return (
            <View style={styles.lineTransaction}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.lineVertical}></Text>

                    <View style={[styles.positionContainer, { backgroundColor: positionColor }]}>
                        <Text style={styles.position}>{++index}º</Text>
                    </View>

                    <Text style={styles.lineVertical}></Text>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                    <Text style={{ flex: 1, fontSize: 20, paddingLeft: 10 }}>{item.name}</Text>
                    <Text style={{ flex: 1, fontSize: 22, textAlign: 'right' }}>{item.Points}</Text>
                </View>
            </View>
        )
    }

    _renderRanking = () => {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.props.ranking}
                    renderItem={this._renderRow}
                    onRefresh={this._bootstrap}
                    refreshing={this.props.isLoading} />
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header title="Ranking" color={color} />
                {this._renderRanking()}
            </View>
        )
    }
}

const styles = Styles()

const mapStateToProps = ({ ranking }) => ({
    ranking: ranking.data,
    isLoading: ranking.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    getRanking: () => dispatch(getRanking()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RankingScreen)