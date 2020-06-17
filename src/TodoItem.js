import React, { Component } from "react";

class TodoItem extends Component {
	constructor (props) {
		super(props);
		this.handleRemove = this.handleRemove.bind(this);
	}

	handleRemove (id) {
		this.props.removeTodo(this.props.id);
	}

	render () {
		return (
			<div>
				<li>{this.props.task}</li>
				<button>Edit</button>
				<button onClick={this.handleRemove}>Delete</button>
			</div>
		);
	}
}
export default TodoItem;
