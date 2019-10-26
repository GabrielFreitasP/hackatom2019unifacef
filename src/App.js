import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navigator from './Navigator'

class App extends Component {

    render() {
        return <Navigator  />
    }
}

export default connect(null, null)(App)