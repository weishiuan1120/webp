import React from 'react';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}

	formSubmit = (e) => {
		const { onAddItem } = this.props;
		// 取消form submit原生的事件
		e.preventDefault();
		onAddItem(this.inputRef.current.value);
		// 再將input value設回空值
		this.inputRef.current.value = '';
	}

	render() {
		return(
			<form onSubmit={this.formSubmit}>
				<input type="text" name="todoItem" ref={this.inputRef} autoComplete="off" />
				<button type="submit" value="submit">submit</button>
			</form>
		);
	}
}

export default TodoForm;
