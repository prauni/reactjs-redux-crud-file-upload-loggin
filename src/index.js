import React, { useState } from 'react';
import axios from 'axios'; 
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './index.css';
import $ from 'jquery';
import App from './App.js';
import Childapp from './components/Childapp.js';
import TodoItem from './components/TodoItem.js';
import TodoForm from './components/TodoForm.js';
import UsersForm from './components/UsersForm.js';
import Login from './components/Login.js';
import Admin from './components/Admin.js';
import Crudapi from './components/Crudapi.js';
import Rcfudapi from './components/Rcfudapi.js';
import Headermenu from './components/Headermenu.js';
import ShoppingCart from './components/ShoppingCart.js';
import Profile from './components/Profile.js';
import Counter from './components/Counter.js';
import Counternew from './components/Counternew.js';
import Hookprofile from './components/Hookprofile.js';
import Clock from './components/Clock.js';
import Logout from './components/Logout.js';
import logo from './logo.jpg';

import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';

const store = createStore(reducer);

const NotFound = () => (
	<h3>NotFound : 404 Page</h3>
)

const Home = () => (
	<h3>Home Page</h3>
)
const Crypo = () => (
	<h3>Crypo-Currency</h3>	
)




const Links = () => (
	<ul className="inlineList">
		<li><Link to="/">Home Page</Link></li>
		<li><Link to="/RCFUD">RCF-UD Page</Link></li>
		<li><Link to="/API">CRUD API</Link></li>
		<li><Link to="/Crypo">Crypo</Link></li>
		<li><Link to="/Login">Login Page</Link></li>
		<li><Link to="/Admin">Profile </Link></li>
		<li><Link to="/Logout">Logout</Link></li>
	</ul>
)

/*
class Headermenu extends React.Component{
	constructor(props){
		super(props)
		const token = localStorage.getItem("token")
		let loggedIn = true
		if(token == null){
			loggedIn = false
		}
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
*/



class Helloworld extends React.Component{
	constructor(){
		super();
		this.name = "Developer..";
		this.state = {
			course:"React",
			users:[{id:99,name:"Ajoy",department:"Chem"}],
			searchlist:[],
			count:0,
			tasks:[
				{name:"ReactJS",status:false},
				{name:"MySQL",status:false},
				{name:"Laravel",status:false}
			],
			currentTask:'',
			currentUser:'Robin',
			currentDept:'Water',
			selectedFile: null,
			isModalActive:false
		};
		this.incrementCounter 	= this.incrementCounter.bind(this);
		this.changeStatus 		= this.changeStatus.bind(this);
		this.updateTask 		= this.updateTask.bind(this);
		this.addTask 			= this.addTask.bind(this);
		this.deleteTask 		= this.deleteTask.bind(this);
		this.editTask 			= this.editTask.bind(this);
	
		this.addUser 			= this.addUser.bind(this);
		this.updateUser 		= this.updateUser.bind(this);
		this.updateDept 		= this.updateDept.bind(this);
		this.deleteUser 		= this.deleteUser.bind(this);
		
		this.onFileChange 		= this.onFileChange.bind(this);
		this.onFileUpload 		= this.onFileUpload.bind(this);
		this.fileData 			= this.fileData.bind(this);
		
		
		
	}
	
	// On file select (from the pop up) 
	onFileChange = event => { 
		// Update the state 
		this.setState({ selectedFile: event.target.files[0] });  
	}; 	

	// On file upload (click the upload button) 
	onFileUpload = () => { 
		// Create an object of formData 
		const formData = new FormData(); 
		// Update the formData object 
		formData.append( 
			"image", 
			this.state.selectedFile, 
			//this.state.selectedFile.name 
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



	
	// file upload is complete 
	fileData = () => { 
		if (this.state.selectedFile) { 
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
		} 
	}; 
		
	componentWillMount(){
		Modal.setAppElement('body')
	}

	showModal = () =>{
		this.setState({
			isModalActive:!this.state.isModalActive
		});
	}
	
	componentDidMount(){
		$.ajax({
			url:'https://medisius.sit.uproducts.in/api/get_search_keyword',
			success:(res)=>{
				console.log('helllo');
				//console.log(res);
				console.log('India');
				//res = JSON.parse(res);
				res.map((val)=>{
					//console.log(val);
				});
				this.setState({
					//searchlist:res
				})
			}
		});
		console.log('----1---');
		$.ajax({
			url:'http://localhost/projects/reactjs/app03redux/php/users_data.php',
			success:(res)=>{
				console.log('helllo');
				console.log(res);
				console.log('India');
				res = JSON.parse(res);
				/*res.map((val)=>{
					//console.log(val);
				});*/
				this.setState({
					users:res
				})
			}
		});
		$.ajax({
			url:'http://localhost/projects/reactjs/app03redux/php/content.php',
			success:(res)=>{
				//alert(99);
				res = JSON.parse(res);
				this.setState({
					course:res.msg
				})
			}
		});
	}
	
	editTask(index,newValue){
		var tasks 		= this.state.tasks;
		var task		= tasks[index];
		task['name']	= newValue;
		this.setState({
			tasks
		});
		
		$.ajax({
			url:'http://localhost/projects/reactjs/app03redux/php/update_data.php',
			data:task,
			method:'POST',
			success:(res)=>{
				console.log('EDITED SUCCESSFULLY');
				res = JSON.parse(res);
				this.setState({
					course:res.msg
				})
			}
		});		
		
	}
	
	deleteTask(index){
		let tasks = this.state.tasks;
		tasks.splice(index,1);
		this.setState({
			tasks
		})
	}
	
	addTask(evt){
		evt.preventDefault();
		let tasks = this.state.tasks;
		tasks.push({
			name:this.state.currentTask,
			status:false
		})
		this.setState({
			tasks:tasks,
			currentTask:''
		})
	}
	
	addUser(evt){
		evt.preventDefault();
		console.log('++---++++');
		let users = this.state.users;
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
		})/* */
		
		
		$.ajax({
			url:'http://localhost/projects/reactjs/app03redux/php/update_data.php',
			data:'name='+newuser+'&dept='+dept,
			method:'POST',
			success:(res)=>{
				console.log('EDITED SUCCESSFULLY');
				/*res = JSON.parse(res);
				this.setState({
					course:res.msg
				})*/ 
			}
		});		
		
	}
	
	deleteUser(id){
		console.log('----2---');
		$.ajax({
			url:'http://localhost/projects/reactjs/app03redux/php/users_data.php',
			data:'id='+id,
			method:'POST',
			success:(res)=>{
				console.log('EDITED SUCCESSFULLY');
				/*res = JSON.parse(res);
				this.setState({
					course:res.msg
				})*/
			}
		});	
	}
	
	updateTask(newValue){
		this.setState({
			currentTask:newValue.target.value
		})
	}

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
	
	incrementCounter(){
		let count = this.state.count;
		this.setState({
			count:++count
		});
	}
	
	changeStatus(index){
		console.log(this.state.tasks[index]);
		var tasks 	= this.state.tasks;
		var task 	= tasks[index];
		task.status	= !task.status;
		this.setState({
			tasks:tasks
		})
	}

	render(){
		const {users} = this.state;//const users = this.state.users;
		const searchlist = this.state.searchlist;//const users = this.state.users;
		//const [selectedFile, setSelectedFile] = useState(null);
		
		return (
			<Router>
				<React.Fragment>					
					<div className="bgcolor">
						<Links />
						<Headermenu />
						<div style={{"border":"1px solid red"}}>
							<div>
								<img src={logo} alt="MyLogo" title="MyLogo" style={{"width":"150px","float":"right"}} />
							</div>
							<ShoppingCart />
						</div>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/RCFUD" component={Rcfudapi} />
							<Route path="/API" component={Crudapi} />
							<Route path="/Crypo" component={Crypo} />
							<Route path="/Login" component={Login} />
							<Route path="/Admin" component={Admin} />
							<Route path="/Logout" component={Logout} />
							<Route component={NotFound} />
						</Switch>
						<Route component={Counter} />
						<Route component={Counternew} />
						<Route component={Profile} />
						<Route component={Hookprofile} />
						<Route component={Clock} />
						<Route component={App} />
						<Route component={Childapp} />
						<hr />
							<button onClick={this.showModal}>Show Modal...</button>
							<Modal 
								isOpen={this.state.isModalActive}>
								<h3 style={{color:"#F00"}}>Hello World From Modal</h3>
								<button onClick={this.showModal}>Close Modal</button>
							</Modal>
						<hr />
						<div style={{float:"left",width:"50%"}} className="bgcolor">						
							{this.state.course} Counter :: {this.state.count} &nbsp;
							<button onClick={this.incrementCounter}> Add Countdown </button><hr />
							<h3>Data comes from API</h3>
							<table><tbody>
								<tr>
									<th>Id</th>
									<th>Name</th>
									<th>Dept.</th>
									<th>Img.</th>
									<th>Action</th>
								</tr>
								{
									users.map((user)=>{
										return <tr key={user.id}>
											<td>{user.id}</td>
											<td>{user.name}</td>
											<td>{user.department}</td>
											<td><img src={'images/'+user.img}  style={{width:'100px'}} /></td>
											<td>											
											<button style={{color:"#f00",float:"right", cursor:"pointer"}} >Delete btn</button>
											</td>
										</tr>
									})
								}
							</tbody></table>
							<h5>onClick=this.deleteUser(user.id)</h5>
							<ul>
								{
									searchlist.map((searchkey)=>{
										return <li>{searchkey}</li>
									})
								}
							</ul>
						</div>
						<div style={{float:"left",width:"45%"}} className="bgcolor">
							<UsersForm 
								addUser={this.addUser}
								
								currentUser={this.state.currentUser}
								updateUser={this.updateUser}
								
								currentDept={this.state.currentDept}
								updateDept={this.updateDept}
								
								onFileChange = {this.onFileChange}
								onFileUpload = {this.onFileUpload}
								fileData = {this.fileData}
							/>
							<TodoForm 
								currentTask={this.state.currentTask}
								updateTask={this.updateTask}
								addTask={this.addTask}
							/>
							<ul>
							{
								this.state.tasks.map((task,index)=>{
									return <TodoItem key={task.name} 
													clickHandler={this.changeStatus} 
													index={index} 
													details={task}
													deleteTask={this.deleteTask} 
													editTask={this.editTask} 
													/>
								})
							}
							</ul>
						</div>
					</div>
				</React.Fragment>
				</Router>
		)	
	}
}
ReactDOM.render(<Provider store={store}><Helloworld /></Provider>,document.getElementById('root'))




