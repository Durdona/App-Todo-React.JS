import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

class TodoList extends Component {
	constructor (props) {
		super(props);
		this.state = { todos: [] };
		this.create = this.create.bind(this);
		this.remove = this.remove.bind(this);
		this.update = this.update.bind(this);
	}

	create (newTodo) {
		this.setState({
			todos: [ ...this.state.todos, newTodo ] // making a copy of existing todos and adding a newTodo
		});
	}

	remove (id) {
		this.setState({
			todos: this.state.todos.filter((t) => {
				return t.id !== id;
			})
		});
	}

	update (id, updatedTask) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, task: updatedTask };
			}
			return todo;
		});
		this.setState({
			todos: updatedTodos
		});
	}

	render () {
		const todos = this.state.todos.map((todo) => {
			return (
				<TodoItem
					key={todo.id}
					task={todo.task}
					id={todo.id}
					removeTodo={this.remove}
					updateTodo={this.update}
				/>
			);
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
