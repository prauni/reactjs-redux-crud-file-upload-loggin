import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './index.css';
import $ from 'jquery';
import App from './App.js';
import Childapp from './components/Childapp.js';
import TodoItem from './components/TodoItem.js';
import TodoForm from './components/TodoForm.js';
import Login from './components/Login.js';
import Admin from './components/Admin.js';
import Profile from './components/Profile.js';
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
		<li><Link to="/">Home</Link></li>
		<li><Link to="/Crypo">Crypo</Link></li>
		<li><Link to="/Login">Login</Link></li>
		<li><Link to="/Admin">Admin</Link></li>
		<li><Link to="/Logout">Logout</Link></li>
	</ul>
)

class Helloworld extends React.Component{
	constructor(){
		super();
		this.name = "Developer..";
		this.state = {
			course:"React",
			users:[],
			count:0,
			tasks:[
				{name:"PHP",status:false},
				{name:"MySQL",status:false},
				{name:"CodeIgniter",status:false}
			],
			currentTask:'',
			isModalActive:false
		};
		this.incrementCounter 	= this.incrementCounter.bind(this);
		this.changeStatus 		= this.changeStatus.bind(this);
		this.updateTask 		= this.updateTask.bind(this);
		this.addTask 			= this.addTask.bind(this);
		this.deleteTask 		= this.deleteTask.bind(this);
		this.editTask 			= this.editTask.bind(this);
	}
	
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
			url:'http://localhost/projects/reactjs/app03redux/php/data.php',
			success:(res)=>{
				console.log('helllo');
				console.log(res);
				console.log('India');
				res = JSON.parse(res);
				res.map((val)=>{
					console.log(val);
				});
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
	
	updateTask(newValue){
		this.setState({
			currentTask:newValue.target.value
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
		return (
			<Router>
				<div>
					<div className="bgcolor">
						<Links />
						<img src={logo} alt="MyLogo" title="MyLogo" style={{"width":"300px"}} />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/Crypo" component={Crypo} />
							<Route path="/Login" component={Login} />
							<Route path="/Admin" component={Admin} />
							<Route path="/Logout" component={Logout} />
							<Route component={NotFound} />
						</Switch>
						<Route component={Profile} />
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
							
							<ul>
								{
									users.map((user)=>{
										return <li key={user.id}>{user.name} : {user.price_usd}</li>
									})
								}
							</ul>
						</div>
						<div style={{float:"left",width:"45%"}} className="bgcolor">
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
				</div>
				</Router>
		)	
	}
}
ReactDOM.render(<Provider store={store}><Helloworld /></Provider>,document.getElementById('root'))




