import React, { Component } from 'react'
export default (WrappedComponent, type = '') => {
  class NewComponent extends Component {
    constructor() {
      super()
      this.state = { data: '111' }
    }
    componentWillMount() {
      let storage = localStorage.getItem(type)
      if (storage) this.setState({ data: storage })
    }
    render() {
      return (
        <WrappedComponent data={this.state.data} />
      )
    }
  }
  return NewComponent
}