import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
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

  handleDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({ list })
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return <TodoItem key={index} deleteItem={this.handleDelete} content={item} index={index} />
      })
    )
  }

  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange} />
          <button onClick={this.handleBtnClick} className='red-btn'>add</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </Fragment>
    );
  }
}

export default TodoList;
