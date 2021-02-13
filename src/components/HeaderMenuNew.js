import React from 'react';
import {connect} from 'react-redux';
import AppOneChild from './AppOneChild.js';


function HeaderMenuNew(props) {
	return (
		<div>
			<ul>
				<li>Home</li>
				<li>About Us</li>
				<li>Services</li>
				<li>Products</li>
				<li>SignIn</li>
				<li>SignUp</li>
				<li>LogIn</li>
				<li>Logout</li>				
			</ul>
		</div>
	);
}

const mapStateToProps = (state)=>{
	return {
		
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {

	}
}	

export default connect(mapStateToProps,mapDispatchToProps)(HeaderMenuNew);