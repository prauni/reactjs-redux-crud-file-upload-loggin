import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import $ from 'jquery';
import axios from 'axios'; 



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
			currentTask:'',
			currentUser:'Robin',
			currentDept:'Water',
			selectedNewFile: null,
		};
		this.handleClick = this.handleClick.bind(this);
		this.refreshpage = this.refreshpage.bind(this);
		this.deleteUser = this.deleteUser.bind(this);

		//this.addNewUser = this.onFileUpload.bind(this);
		this.currentUser = this.deleteUser.bind(this);
		this.updateUser = this.updateUser.bind(this);
		this.currentDept = this.deleteUser.bind(this);
		this.updateDept = this.updateDept.bind(this);
		this.onFileChange = this.onFileChange.bind(this);
		this.onFileUpload = this.onFileUpload.bind(this);
		this.fileData = this.fileData.bind(this);		
	}
// On file select (from the pop up) 
	onFileChange = event => { 
		// Update the state 
		this.setState({ selectedNewFile: event.target.files[0] });  
		console.log('-------------------');
	}; 	
	
	// On file upload (click the upload button) 
	onFileUpload = () => { 
		// Create an object of formData 
		const formData = new FormData(); 
		// Update the formData object 
		formData.append( 
			"myFile", 
			this.state.selectedFile, 
			this.state.selectedFile.name 
		); 
		formData.append( 
			"name", 
			this.state.currentUser
		); 
		formData.append( 
			"dept", 
			this.state.currentDept
		); 
		// Details of the uploaded file 
		console.log(this.state.selectedFile); 
		// Request made to the backend api 
		// Send formData object 
		axios.post("http://localhost/projects/reactjs/app03redux/php/update_data.php", formData); 
	};
	
	updateUser(newValue){
		this.setState({
			currentUser:newValue.target.value
		})
	}
	
	updateDept(newValue){
		this.setState({
			currentDept:newValue.target.value
		})
	}	
	
	
	addUser(evt){
		evt.preventDefault();
		console.log('++---++++');
		/*let users = this.state.users;
		let newuser = this.state.currentUser;
		let dept 	= this.state.currentDept; 
		users.push({
			id:Math.floor(Math.random() * 100) + 1,
			name:this.state.currentUser,
			department:dept,
			status:false
		})
		
		this.setState({
			users:users,
			currentUser:'',
			
		})
		
		$.ajax({
			url:'http://localhost/projects/reactjs/app03redux/php/update_data.php',
			data:'name='+newuser+'&dept='+dept,
			method:'POST',
			success:(res)=>{
				console.log('EDITED SUCCESSFULLY');				
			}
		});		
		*/
	}	
	
	
	
	
	
	handleClick() {
		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));
	}
	deleteUser(id) {
		console.log(id);
		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));

		const formData = new FormData(); 
		// Update the formData object 
		formData.append( "id",id); 
		axios.post("http://localhost/projects/reactjs/app03redux/php/delete_data.php", formData);		
	}
	
	refreshpage() {
		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));		
		$.ajax({
			url:'http://localhost/projects/reactjs/app03redux/php/users_data.php',
			success:(res)=>{
				res = JSON.parse(res);
				/*res.map((val)=>{
					//console.log(val);
				});*/
				this.setState({
					users:res
				})
			}
		});		
	}

	
	
	
	// file upload is complete 
	fileData = () => { 
			return ( 
				<div> 
					<h4>Choose before Pressing the Upload btn.</h4> 
				</div> 
			); 	
		/*
		if (this.state.selectedFile) { 
		
			const file = this.state.selectedFile; 
			console.log(file); 
			if (file){ 
			  let reader = new FileReader(); 
			  reader.onload = function(event){ 
				console.log(event.target.result); 
				$('#profileImgPreview').attr('src', event.target.result).attr('width','150px'); 
			  } 
			  reader.readAsDataURL(file); 
			}	
		
			return ( 
				<div> 
					<h2>File Details:</h2> 
					<p>File Name: {this.state.selectedFile.name}</p> 
					<p>File Type: {this.state.selectedFile.type}</p> 
					<p> 
						Last Modified:{" "} 
						{this.state.selectedFile.lastModifiedDate.toDateString()} 
					</p> 
				</div> 
			); 
		} else { 
			return ( 
				<div> 
				<br /> 
				<h4>Choose before Pressing the Upload button</h4> 
				</div> 
			); 
		}*/ 
	}; 
	
	render(){
		const token = localStorage.getItem("token")
		let loggedIn = true
		if(token == null){
			loggedIn = false
		}
		return (
		<div>		
			<form onSubmit={this.onFileUpload}>
				<h3>React CRUD and File Upload</h3> 
				<input 
					value={this.state.currentUser} 
					onChange={this.updateUser} 
					required
				/>
				<input 
					value={this.state.currentDept} 
					onChange={this.updateDept} 
					required
				/>
				<div> 
					<div> 
						<input type="file" id="pphoto" onChange={this.onFileChange} /> 
					</div> 
					{this.fileData()} 
				</div>
				<div> 
					<img id="profileImgPreview" src="#" alt="pic" /> 
				</div> 
            
				<button type="submit">Submit btn</button>
			</form>
		
		<table style={{border:'1px solid red', width:'100%'}}><tbody>
			<tr>
				<td>Id</td>
				<td>Name</td>
				<td>Dept.</td>
				<td>Action </td>
				<td><span  onClick={this.refreshpage}>Refresh</span> &nbsp; &nbsp;<button onClick={this.handleClick} style={{color:"#f00",float:"right", cursor:"pointer"}}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button></td>
			</tr>
			{
				this.state.users.map((user)=>{
					return <tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.department}</td>
						<td>											
						<button  onClick={() => this.deleteUser(user.id)} style={{color:"#f00",float:"left", cursor:"pointer"}} >Delete btn</button>
						</td>
						<td></td>
					</tr>
				})
			}
		</tbody></table>
		</div>
		)
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