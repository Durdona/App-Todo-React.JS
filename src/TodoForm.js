import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

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

	// validating form input
	validate = () => {
		let error = "";
		if (this.state.task.length <= 0) {
			error = "Please type in what you are planing to do";
		}
		if (error) {
			this.setState({ error });
			return false;
		}
		return true;
	};

	handleSubmit (evt) {
		evt.preventDefault(); // parent will pass a function as a props now
		// this.props.createTodo({ ...this.state, id: uuidv4(), completed: false });
		// this.setState({ task: "" });
		const isValid = this.validate();
		if (isValid) {
			console.log(this.state);
			this.props.createTodo({ ...this.state, id: uuidv4(), completed: false }); // adding uuid to existing state values
			this.setState({ task: "", error: "" }); // resetting
		}
	}
	render () {
		return (
			<form onSubmit={this.handleSubmit} autoComplete="off">
				<label htmlFor="task">New Todo</label>
				<input
					type="text"
					placeholder="New Todo"
					name="task"
					value={this.state.task}
					onChange={this.handleChange}
				/>
				<p style={{ color: "salmon", padding: "1rem 0 1rem 0" }}>{this.state.error}</p>
				<button>Add Todo</button>
			</form>
		);
	}
}
export default TodoForm;
