import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About' //Home是路由组件
import Home from './pages/Home' //About是路由组件
import Header from './components/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink'
import Test from './pages/Test'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，靠<a>跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
              {/* <NavLink activeclassname='atguigu' className='list-group-item' to="/home">Home</NavLink> */}
              <MyNavLink to='/about'>About</MyNavLink>
              <MyNavLink to='/home'>Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* 旧版本写法 */}
                {/* <Route path='/about' component={About} />
                <Route path='/home' component={Home} /> */}
                {/* 新版本写法 */}
                {/* 旧版写法 */}
                {/* <Switch> */}
                {/* 新版写法 */}
                {/* 使用Switch或者Routes的目的就是为了防止path名相同时，只执行第一个 */}
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/home' element={<Home />} />
                  <Route path='/home' element={<Test />} />
                </Routes>
                {/* </Switch> */}
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
