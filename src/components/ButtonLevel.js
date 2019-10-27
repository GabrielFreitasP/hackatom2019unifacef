import React, { Component } from 'react'
import Styles from '../styles/components/ButtonLevelStyle'
import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native'

class ButtonLevel extends Component {
    constructor(props) {
        super(props)
        this._setStyle()
    }

    _setStyle() {
        this.styles = Styles(this.props.color)
    }

    render() {
        const title = this.props.title
        return (
            <View style={this.styles.container}>
                <View style={this.styles.circle}>
                    <TouchableOpacity style={this.styles.button} onPress={this.props.onPress}>
                        <Text style={this.styles.icon}>#{this.props.number}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={this.styles.text}>{title}</Text>
            </View>
        )
    }
}

export default ButtonLevel
