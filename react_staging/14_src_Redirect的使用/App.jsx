import React, { Component } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import About from './pages/About' //Home是路由组件
import Home from './pages/Home' //About是路由组件
import Header from './components/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink'

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
                  {/* 旧版本精准匹配模式 */}
                  {/* <Route exact path='/about' element={<About />} />
                  <Route exact path='/home' element={<Home />} /> */}
                  {/* 在v6中由于v6 内部算法改变，它默认就是匹配完整路径。 */}
                  {/* 
                      精准匹配与模糊匹配：
                      v5:默认是模糊匹配，通过在Route配置加exact开启精准匹配
                      v6:默认开启精准匹配，加/*开启模糊匹配 
                      */}
                  <Route path='/about' element={<About />} />
                  <Route path='/home' element={<Home />} />
                  {/* 它当匹配不到路由时，需要使用Redirect做重定向，跳转到我们定义的组件（页面）中 */}
                  {/* v5，代码如下 */}
                  {/* <Redirect to='/about' /> */}
                  {/* v6，代码如下 */}
                  <Route path="/" element ={<Navigate replace to="/about" />} />
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
