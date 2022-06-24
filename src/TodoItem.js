import React from "react";

class TodoItem extends React.Component {

    handleDelete() {
        console.log(123)
    }

    render() {
        return (
            <div onClick={this.handleDelete.bind(this)}>{this.props.content}</div>
        )
    }
}

export default TodoItem;