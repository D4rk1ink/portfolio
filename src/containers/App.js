import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu'
import Profile from './Profile'

class App extends Component {
    render () {
        return (
            <div>
                <Header />
                <Menu />
                <Profile />
            </div>
        )
    }
}

export default App