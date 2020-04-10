import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
class Profile extends Component{
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
			<div style={{backgroundColor:"#87e7f1",}}>
				<h3 style={{"display":"inline-block",}}>Redux using Class Component ( Profile ) :: This is admin page, without login you can't access this page. <br />
				this.state.myname :: {this.state.myname} <br />
				this.props.myname :: {this.props.myname}</h3>
				<button onClick={()=>{this.props.changeName("Kumble")}}>Change Name to Kumble</button>
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
export default connect(mapStateToProps,mapDispatchToProps)(Profile)