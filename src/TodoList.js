import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['learn react', 'learn english', 'learn vue'],
      inputValue: ''
    }
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, 'hello world']
    })
  }

  handleInputChange(e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <div>
          <input onChange={this.handleInputChange} />
          <button onClick={this.handleBtnClick.bind(this)}>add</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => { return <li key={index}>{item}</li> })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
