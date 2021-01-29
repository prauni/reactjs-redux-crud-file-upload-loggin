import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import $ from 'jquery';

class Admin extends Component{
	constructor(props){
		super(props)
		this.state = {
			course:"Python"
		}		
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

	componentDidMount(){
		$.ajax({
			url:'http://localhost/projects/reactjs/app03redux/php/admincontent.php',
			success:(res)=>{
				//alert(99);
				res = JSON.parse(res);
				this.setState({
					course:res.msg
				})
			}
		});		
	}
	
	
	render(state){
		if(this.state.loggedIn === false){
			return <Redirect to="/Login" />
		}		
		return (
			<React.Fragment>
				<h3 style={{"display":"inline-block",}}>
				Redux using Class Component ( Admin ) :: This is admin page, 
				without login you cant access this page. <br />
				this.state.myname :: {this.state.myname} <br />
				this.props.myname :: {this.props.myname}
				</h3>
				<h4>Course ::::: {this.state.course}</h4>
				
				<button onClick={()=>{this.props.changeName("Vimal")}}>Change Name to Vimal</button>
				<button onClick={()=>{this.props.changeName("Alok")}}>Change Name to Alok</button>
				{/*<Link to="/logout">Logout</Link>*/ }
			</React.Fragment>
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