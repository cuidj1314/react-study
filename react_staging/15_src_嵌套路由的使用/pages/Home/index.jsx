import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'
import { Route, Routes } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="panel-body">
                    <h3>我是Home的内容</h3>
                </div>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            {/* <a className="list-group-item" href="./home-news.html">News</a> */}
                            <MyNavLink to='news'>News</MyNavLink>
                        </li>
                        <li>
                            {/* <a className="list-group-item active" href="./home-message.html">Message</a> */}
                            <MyNavLink to='message'>Message</MyNavLink>
                        </li>
                    </ul>
                    {/* 注册路由 */}
                    <Routes>
                        <Route path='news' element={<News />} />
                        <Route path='message' element={<Message />} />
                    </Routes>
                </div>
            </div>
        )
    }
}
