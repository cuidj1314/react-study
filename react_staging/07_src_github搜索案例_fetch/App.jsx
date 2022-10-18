import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'

export default class App extends Component {

    render() {
        // const { users } = this.state
        return (
            <div className="container">
                <Search />
                <List />
            </div>
        )
    }
}
