import React, { useState, useRef, Component, useEffect  } from 'react';
import axios from 'axios'; 
import $ from 'jquery';
import Clock from './Clock.js';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


function Hookclock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
	setInterval(() => {
	  setDate(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
	}, 1000);
  }, []);

  return <div>{date.toString()}</div>;
}

class Rcfudapi extends Component{
	constructor(props){
		super(props);
		this.state 		= {cname:'Riyan',dname:'R12',sfile:'File',selectedFile:null,users:[],isToggleOn:'ON',timer:456};
		this.ucname 	= this.ucname.bind(this);
		this.udname 	= this.udname.bind(this);
		this.fchange 	= this.fchange.bind(this);
		this.fupload 	= this.fupload.bind(this);
		this.rfpage 	= this.rfpage.bind(this);
		this.duser 		= this.duser.bind(this);
	}
	
	componentDidMount() {
		this.timer = setInterval(() => this.setState({ time: Date.now() }), 1000)
	}
	
	duser = (id) => {
		console.log(id);
		const formData = new FormData(); 
		formData.append( 
			"uid", 
			id
		); 
		axios.post("http://localhost/projects/reactjs/app03redux/php/delete_data.php", formData)
		.then((response)=>{this.rfpage();}); 
		
	}
	
	rfpage = () => {
		console.log('--rfpage---');
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
	
	fupload = (evt) => {
		evt.preventDefault();
		// Create an object of formData 
		const formData = new FormData(); 

		formData.append( 
			"image", 
			this.state.selectedFile, 
			//this.state.selectedFile.name 
		); 
		formData.append( 
			"name", 
			this.state.cname
		); 
		formData.append( 
			"dept", 
			this.state.dname
		); 
		// Details of the uploaded file 
		console.log(this.state.selectedFile); 
		// Request made to the backend api 
		// Send formData object 
		axios.post("http://localhost/projects/reactjs/app03redux/php/update_data.php", formData)
		.then((response)=>{this.rfpage();}); ; 

		console.log('++1++')
	}
	
	fchange = (event) => { 
		this.setState({ sfile: event.target.files[0].name }); 
		this.setState({ selectedFile: event.target.files[0]	}); 	
		console.log('********');
		console.log(event.target.files[0]);
		console.log('++++++***********++++')
	}
	
	ucname = (nval) => {
		this.setState({
			cname:nval.target.value
		});
		console.log('*****');
	}
	udname = (nval) => {
		this.setState({
			dname:nval.target.value
		});
		console.log('++++++');
	}
	
	/*
		
	*/
	
	render(state){
		return (
				<div>
					<h3>Rcfudapi Class Component........</h3>
					<Route component={Clock} />
					<Route component={Hookclock} />
					
					<table style={{width:"100%"}}><tbody>
					<tr><td style={{width:"30%"}}>
					<form onSubmit={this.fupload}>
						<h5>Name</h5>
						<input 
							value={this.state.cname} 
							onChange={this.ucname} 
							required
						/>
						<h5>Dept</h5>
						<input 
							value={this.state.dname} 
							onChange={this.udname} 
							required
						/>
						<h5>Img</h5>
						<h5>Img Name {this.state.sfile} </h5> 
						<input type="file" id="sfile" onChange={this.fchange} />
						<hr />
						<button type="submit">Submit btn</button>
					</form>
					</td><td style={{width:"50%"}}>
					<h3>User List {this.state.timer}</h3>
	<table style={{border:'1px solid red', width:'100%'}}><tbody>
			<tr>
				<td>Id</td>
				<td>Name</td>
				<td>Dept.</td>
				<td>Image</td>
				<td>Action </td>
				<td>
					<span  onClick={this.rfpage}>Refresh</span> &nbsp; &nbsp;
					<button onClick={this.rfpage} style={{color:"#f00",float:"right", cursor:"pointer"}}>
						{this.state.isToggleOn ? 'ON' : 'OFF'}
					</button>
				</td>
			</tr>
			{
				this.state.users.map((user)=>{
					return <tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.department}</td>
						<td><img src={'images/'+user.img} width="100" /></td>
						<td>											
							<button  onClick={() => this.duser(user.id)} style={{color:"#f00",float:"left", cursor:"pointer"}} >
								Delete btn
							</button>
						</td>
						<td></td>
					</tr>
				})
			}
		</tbody></table>
				</td></tr></tbody></table>


					
				</div>
		)
	}
}
export default Rcfudapi;