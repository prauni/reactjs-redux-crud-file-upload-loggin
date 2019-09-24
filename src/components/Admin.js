import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
class Admin extends Component{
	constructor(props){
		super(props)
		const token = localStorage.getItem("token")
		let loggedIn = true
		if(token == null){
			loggedIn = false
		}
		this.state = {
			loggedIn,
			myname:props.myname
		}
	}

	render(state){
		if(this.state.loggedIn === false){
			return <Redirect to="/Login" />
		}		
		return (
			<div>
				<h3 style={{"display":"inline-block",}}>
				Redux using Class Component ( Admin ) :: This is admin page, 
				without login you can't access this page. <br />
				this.state.myname :: {this.state.myname} <br />
				this.props.myname :: {this.props.myname}
				</h3>
				<button onClick={()=>{this.props.changeName("Vimal")}}>Change Name to Vimal</button>
				{/*<Link to="/logout">Logout</Link>*/ }
			</div>
		)
	}
}


const mapStateToProps = (state)=>{
	return {
		myname:state.name
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		changeName:(name)=>{dispatch({type:'CHANGE_NAME',payload:name})}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Admin)