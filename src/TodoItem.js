import React, { Component } from "react";
import "./assets/TodoItem.css";

class TodoItem extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isEditing: false,
			task: this.props.task,
			isChecked: false
		}; // added task to make controlled input
		this.handleRemove = this.handleRemove.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
		this.handleLineThrough = this.handleLineThrough.bind(this);
	}

	handleRemove (id) {
		this.props.removeTodo(this.props.id);
	}

	toggleForm () {
		this.setState({
			isEditing: !this.state.isEditing
		});
	}
	handleUpdate (evt) {
		evt.preventDefault();
		// take new task data and pass up to parent
		this.props.updateTodo(this.props.id, this.state.task);
		this.setState({
			isEditing: false
		});
	}

	handleChange (evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}
	handleToggle (evt) {
		this.props.toggleTodo(this.props.id);
	}

	handleLineThrough (evt) {
		this.props.toggleLineThrough(this.props.id);
	}

	render () {
		let result;
		if (this.state.isEditing) {
			result = (
				<div>
					<form onSubmit={this.handleUpdate}>
						<input
							placeholder="Edit"
							type="text"
							value={this.state.task}
							name="task"
							onChange={this.handleChange}
						/>
						<button>Save</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div>
					<li onClick={this.handleToggle} className={this.props.completed ? "completed" : ""}>
						{this.props.task}
					</li>
					<div className="Todo-buttons">
						<input type="checkbox" onChange={this.handleLineThrough} />

						<button onClick={this.toggleForm}>
							<i className="far fa-edit" />
						</button>
						<button onClick={this.handleRemove}>
							<i className="fas fa-trash" />
						</button>
					</div>
				</div>
			);
		}
		return result;
	}
}
export default TodoItem;
