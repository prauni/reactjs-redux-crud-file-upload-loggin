import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import $ from 'jquery';

class Headermenu extends React.Component{
	constructor(props){
		super(props)
		const token = localStorage.getItem("token")
		/*let loggedIn = true
		if(token == null){
			loggedIn = false
		}*/
	}
	render(){
		const token = localStorage.getItem("token")
		let loggedIn = true
		if(token == null){
			loggedIn = false
		}		
		if(loggedIn){
			return (
				<ul className="inlineList">
					<li><Link to="/">Home Page</Link></li>
					<li><Link to="/Crypo">Crypo</Link></li>					
					<li><Link to="/Admin">Profile Page </Link></li>
					<li><Link to="/Logout">Logout</Link></li>
				</ul>
			)
		}
		else{
			return (
				<ul className="inlineList">
					<li><Link to="/">Home Page</Link></li>
					<li><Link to="/Crypo">Crypo Page</Link></li>
					<li><Link to="/Login">Login Page</Link></li>
					<li><Link to="/Admin">Profile Page </Link></li>					
				</ul>
			)			
		}
	}
}

export default Headermenu;