import React from 'react';  // 核心库
import './Container.css';
import Test from './views/Test'

function Container(props) {
  console.log(props); // {name: "container"}
  // let isShow = true;
  // let arr = [1,2,3,4,5];
  let fn= function() {
    console.log(123);
  };
  // return (
  //   <div className={props.name}>
  //     { isShow ? <div onClick={fn}>{arr.map((item,index) => <h2 key={index}>{item}</h2>)}</div> : <h3>h3</h3> }
  //   </div>
  // );
  return (
    <div className={props.name} onClick={fn}>
      <Test name={'test-className'}/>
    </div>
  );
}

export default Container;  // 函数式组件
