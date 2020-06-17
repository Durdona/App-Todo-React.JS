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
		this.toggleCompletion = this.toggleCompletion.bind(this);
		this.toggleLine = this.toggleLine.bind(this);
	}

	create (newTodo) {
		this.setState({
			todos: [ ...this.state.todos, newTodo ] // copying all todos and adding newTodo using a spread operator
		});
	}
	// passing to a child as a props
	remove (id) {
		this.setState({
			//  using filter() method in order not to mutate an original state
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

	// will line-through as I click on text
	toggleCompletion (id) {
		const updateTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		this.setState({ todos: updateTodos });
	}

	// will line-through as I click on checkbox
	toggleLine (id) {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			})
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
					completed={todo.completed}
					toggleTodo={this.toggleCompletion}
					toggleLineThrough={this.toggleLine}
				/> // instead of arrow function for better performance we are using  passing functions as a props to a child
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
