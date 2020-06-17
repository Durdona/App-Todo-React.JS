import React, { Component } from "react";

class TodoForm extends Component {
	//creating  a controlled input with state
	constructor (props) {
		super(props);
		this.state = { task: "" };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	//reminds me Vue.JS two way data binding mode
	handleChange (evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}
	handleSubmit (evt) {
		evt.preventDefault(); // parent will pass a function as a props now
		this.props.createTodo(this.state);
		this.setState({ task: "" });
	}
	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="task">New Todo</label>
				<input
					type="text"
					placeholder="New Todo"
					name="task"
					value={this.state.task}
					onChange={this.handleChange}
				/>
				<button>Add Todo</button>
			</form>
		);
	}
}
export default TodoForm;
