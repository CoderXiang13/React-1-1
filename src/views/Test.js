import React from 'react';
import Bar from '../components/Bar'
// 函数式组件
// export default function Test() {
//   return (
//     <div>test</div>
//   )
// }

// 类组件  继承React基础组件
export default class Test extends React.Component{
  constructor(props) { // 通过构造器获取属性值
   super(props);  // 父类构造器的方法
    this.state = {  // 数据模型
      msg: 'hello,world!'
    };
    // this.reverseMsg = this.reverseMsg.bind(this)
  }
  // reverseMsg() {
    // this.state.msg = this.state.msg.split('').reverse().join('');
    // console.log(this.state.msg);
    // this.setState({  // 更新视图
    //   msg: this.state.msg.split('').reverse().join('')
    // })  // 设置状态
  // }
  reverseMsg = () => {
    this.setState({
      msg: this.state.msg.split('').reverse().join('')
    })
  };
  render() {
    // console.log(this.props);
    return (
      // <div className={this.props.name} onClick={this.reverseMsg}>{ this.state.msg }</div>
      // <div className={this.props.name} onClick={this.reverseMsg.bind(this)}>{ this.state.msg }</div>
      <div className={this.props.name} onClick={this.reverseMsg}>
        <Bar/>
      </div>
    )
  }
}