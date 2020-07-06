import React from 'react'

export default class Bar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  changUsername = (e) => {
    console.dir(e.target.value);
    this.setState({
      username: e.target.value
    })
  };
  changePassword = (e) => {
    console.dir(e.target.value);
    this.setState({
      password: e.target.value
    })
  };
  render() {
    return (
      <div>
        <input type="text" onInput={this.changUsername} value={this.state.username}/>
        <input type="text" onInput={this.changePassword} value={this.state.password}/>

      </div>
    )
  }
}