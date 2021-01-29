import React from 'react';

const TodoForm = (props) => {
	return (<form onSubmit={props.addTask}>
				<input 
					value={props.currentTask} 
					onChange={props.updateTask} 
					required
				/>
				<button type="submit">Submit btn</button>
			</form>)
}
export default TodoForm;