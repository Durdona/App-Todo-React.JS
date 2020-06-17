import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

class TodoList extends Component {
	constructor (props) {
		super(props);
		this.state = { todos: [ { task: "Stay Focused" }, { task: "Prioritize Goal" }, { task: "Keep Practicing" } ] };
		this.create = this.create.bind(this);
	}

	create (newTodo) {
		this.setState({
			todos: [ ...this.state.todos, newTodo ] // making a copy of existing todos and adding a newTodo
		});
	}

	render () {
		const todos = this.state.todos.map((todo) => {
			return <TodoItem task={todo.task} />;
		});
		return (
			<div>
				<h1> Todo List</h1>
				<TodoForm createTodo={this.create} />
				<ul>{todos}</ul>
			</div>
		);
	}
}
export default TodoList;
