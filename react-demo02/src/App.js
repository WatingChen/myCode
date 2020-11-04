import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentInput from './components/CommentInput'
import CommentList from './components/CommentList'
import storageComponent from './components/hoc/storageComponent'
class Title extends Component {
  handleClickOnTitle(e) {
    console.log('Click on title.', e, this)
  }
  render() {
    return (
      <h1 onClick={this.handleClickOnTitle.bind(this)}>React 小书</h1>
    )
  }
}
class LickButton extends Component {
  static defaultProps = {
    options: { likes: "hehe", cancel: "nono" }
  }
  constructor() {
    super()
    this.state = { isClickButton: false, count: 0 }
  }
  handleClickOnButton() {
    this.setState({
      isClickButton: !this.state.isClickButton
    })
    this.setState((prevState) => {
      return { count: 2 }
    })
    this.setState((prevState) => {
      return { count: ++prevState.count }
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClickOnButton.bind(this)}>{this.state.isClickButton ? this.props.options.likes : this.props.options.cancel}</button>
        <span>👍</span>
      </div>
    )
  }
}

class Index extends Component {
  render() {
    const users = [
      { username: 'Jerry', age: 21, gender: 'male' },
      { username: 'Tomy', age: 22, gender: 'male' },
      { username: 'Lily', age: 19, gender: 'female' },
      { username: 'Lucy', age: 20, gender: 'female' }
    ]
    return (
      <div>
        {
          users.map((val, index) => (
            <div key={index}>
              <span>{val.username} </span>
              <span>{val.age} </span>
              <span>{val.gender}</span>
            </div>
          ))
        }
      </div>
    )
  }
}

class Input extends Component {
  constructor() {
    super()
    this.state = { value: '' }
  }
  getValue(e) {
    this.setState({ value: e.target.value })
  }
  render() {
    return (
      <input onInput={this.getValue.bind(this)} value={this.state.value || this.props.data} />
    )
  }
}
const InputWithStorage = storageComponent(Input)
class App extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }
  handleSubmit(data) {
    this.setState({
      list: this.state.list.concat(data)
    })
  }
  deleteList(index) {
    this.state.list.splice(index, 1)
    this.setState({
      list: this.state.list
    })
  }
  render() {
    const word = "words"
    const className = 'header'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            hello react - {word} - {(() => 222)()}
          </p>
          <div className={className}>className
        {true
              ? <strong> is good</strong>
              : <span> is not good</span>
            }
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <Title />
          <LickButton click={() => { console.log('click') }} />
          <Index />
          <CommentInput handleSubmit={this.handleSubmit.bind(this)} />
          <CommentList list={this.state.list} deleteList={this.deleteList.bind(this)} />
          <InputWithStorage />
        </header>
      </div>
    );
  }
}

export default App;
