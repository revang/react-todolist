import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleItemClick(index) {
    this.state.list.splice(index, 1) // 不推荐使用这种方法，不方便跟踪问题
    // const list = [...this.state.list]
    // list.splice(index, 1)
    this.setState({
      list: [...this.state.list]
    })
  }

  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
          <button onClick={this.handleBtnClick.bind(this)}>add</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => { return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li> })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
