import React, { Component } from 'react'
import Styles from '../styles/components/HeaderStyle'
import {
    Text,
    View,
} from 'react-native'

class Header extends Component {
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
                <Text style={this.styles.title}>{title}</Text>
            </View>
        )
    }
}

export default Header
