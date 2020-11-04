import React, { Component } from 'react'
export default class ComponentInput extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      content: ""
    }
  }
  getUsernameValue(e) {
    this.setState({
      value: e.target.value
    })
  }
  getContentValue(e) {
    this.setState({
      content: e.target.value
    })
  }
  submit() {
    this.props.handleSubmit(this.state)
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <div>
        <div>
          <p>username</p>
          <input type="text" onInput={this.getUsernameValue.bind(this)} value={this.state.value} />
        </div>
        <div>
          <p>content</p>
          <input type="text" onInput={this.getContentValue.bind(this)} value={this.state.content} />
        </div>
        <button onClick={this.submit.bind(this)}>提交</button>
      </div>
    )
  }
}