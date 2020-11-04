import React, { Component } from 'react'
export default class ComponentInput extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  deleteListIndex(index) {
    this.props.deleteList(index)
  }
  render() {
    return (
      <div>
        {
          this.props.list.map((val, index) => (
            <div key={index}>
              <div>{val.value}</div>
              <div>{val.content}</div>
              <button onClick={this.deleteListIndex.bind(this, index)}>删除</button>
            </div>
          ))
        }
      </div>
    )
  }
}