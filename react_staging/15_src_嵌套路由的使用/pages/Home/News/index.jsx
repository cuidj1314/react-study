import React, { Component } from 'react'

export default class News extends Component {
    render() {
        console.log("11111111111111",this.props)
        return (
            <div>
                <ul>
                    <li>news001</li>
                    <li>news002</li>
                    <li>news003</li>
                </ul>
            </div>
        )
    }
}
