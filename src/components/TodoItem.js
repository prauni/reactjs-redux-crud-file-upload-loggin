import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

class TodoItem extends React.Component{
	constructor(props){
		super(props);
		this.state = ({
			isEditing:false
		});
		this.renderForm 	= this.renderForm.bind(this);
		this.renderItem 	= this.renderItem.bind(this);
		this.toggleState 	= this.toggleState.bind(this);
		this.updateItem 	= this.updateItem.bind(this);
	}
	updateItem(evt){
		evt.preventDefault();
		this.props.editTask(this.props.index,this.input.value);
	}
	toggleState(){
		return(
			this.setState({
				isEditing:!this.state.isEditing
			})
		)
	}
	renderForm(){
		return(
			<form onSubmit={this.updateItem}>
				<input 	type="text" 
						ref={(value)=>this.input = value}
						defaultValue={this.props.details.name} />
				<button type="submit" className={'floatright'}>Update btn</button>
			</form>
		)
	}
	renderItem(){
		var flri = {color: 'white'};
		return(
			<li onClick={()=>{this.props.clickHandler(this.props.index)}} 
				className={this.props.details.status?'statustrue':'statusfalse'}>
				{this.props.details.name} &nbsp; &nbsp; 
				<button onClick={(evt)=>{
							evt.stopPropagation();
							this.props.deleteTask(this.props.index) 
						}}
						className={'floatright'}>Delete btn</button> &nbsp; &nbsp; 
				<button onClick={(evt)=>{
							evt.stopPropagation();
							this.toggleState()
						}}
						style={{float:"right"}}>Edit btn</button> 
			</li>
		)
	}
	
	render(){
		const {isEditing} = this.state;
		return (
			<section>
			{
				isEditing?this.renderForm():this.renderItem()
			}
			</section>
			)
	}
}

/*
class TodoItem extends React.Component{
	render(){
	return (<li onClick={()=>{this.props.clickHandler(this.props.index)}} 
				className={this.props.details.status?'statustrue':'statusfalse'}>
				{this.props.details.name}
			</li>)
	}
}
*/
/* Its Stateless Component
const TodoItem = (props) => {
	return (<li onClick={()=>{props.clickHandler(props.index)}} 
				className={props.details.status?'statustrue':'statusfalse'}>
				{props.details.name}
				<button onClick={(evt)=>{
					evt.stopPropagation();
					props.deleteTask(props.index)
				}}>Delete</button>
			</li>)
}
*/
export default TodoItem;










