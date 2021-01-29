import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import $ from 'jquery';

class Crudapi extends Component{
	constructor(props){
		super(props)
		this.state = {
			course:"Python",
			mysearchlist:[],
		}		
		const token = localStorage.getItem("token")
		let loggedIn = true
		if(token == null){
			loggedIn = false
		}
		this.state = {
			loggedIn,
			myname:props.myname,
			mysearchlist:[],
		}
	}

	componentDidMount(){
		$.ajax({
			url:'https://medisius.sit.uproducts.in/api/get_search_keyword',
			success:(res)=>{
				console.log('-----------------');
				res.map((val)=>{
					//console.log(val);
				});
				this.setState({
					//mysearchlist:res
				})
			}
		});		
	}
	
	
	render(state){
		if(this.state.loggedIn === false){
			return <Redirect to="/Login" />
		}	
		const mysearchlist = this.state.mysearchlist;
		return (
			<div>
				<h1>Hello</h1>
				<ul>
					<li>New</li>
					<li>Product</li>					
					{
						mysearchlist.map((mysearchkey)=>{
							return <li>{mysearchkey}</li>
						})
					}					
				</ul>
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
export default connect(mapStateToProps,mapDispatchToProps)(Crudapi)