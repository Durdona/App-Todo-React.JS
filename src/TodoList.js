import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
	constructor (props) {
		super(props);
		this.state = { todos: [ { task: "Stay Focused" }, { task: "Prioritize Goal" }, { task: "Keep Working" } ] };
	}

	render () {
		const todos = this.state.todos.map((todo) => {
			return <TodoItem task={todo.task} />;
		});
		return (
			<div>
				<ul>{todos}</ul>
			</div>
		);
	}
}
export default TodoList;
