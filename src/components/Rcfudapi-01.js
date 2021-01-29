import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import $ from 'jquery';

class Rcfudapi extends React.Component{
	constructor(props){
		super(props)
		const token = localStorage.getItem("token")
		/*let loggedIn = true
		if(token == null){
			loggedIn = false
		}*/
		
		this.state = {
			users:[{id:99,name:"Ajoy",department:"Chem"}],			
		};
		
	}
	render(){
		const token = localStorage.getItem("token")
		let loggedIn = true
		if(token == null){
			loggedIn = false
		}		
		if(loggedIn){
			return (
				<h1>Hello</h1>
			)
		}
		else{
			return (
				<h2>World</h2>
			)			
		}
	}
}

export default Rcfudapi;