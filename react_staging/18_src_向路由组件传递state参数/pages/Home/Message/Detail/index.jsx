import React, { Component } from 'react'

// let obj = { name: 'tom', age: 18 }
// console.log(qs.stringify(obj)) //name=tom&age=18   urlEncoding的编码格式

// let str = 'carName=奔驰&price=199'
// console.log(qs.parse(str))


const DetailData = [
    { id: '01', content: '你好中国' },
    { id: '02', content: '你好尚硅谷' },
    { id: '03', content: '你好，未来的自己' }
]

export default class Detail extends Component {
    render() {

        console.log(this.props)
        //接收params参数
        // const { id, title } = this.props.match.params

        //接收search参数
        // const { search } = this.props.location
        // const { id, title } = qs.parse(search.slice(1))
        //接收state参数
        const { state } = this.props.location
        const { id, title } = state || {}

        const findResult = DetailData.find((detailObj) => {
            return detailObj.id === id
        }) || {}

        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}
