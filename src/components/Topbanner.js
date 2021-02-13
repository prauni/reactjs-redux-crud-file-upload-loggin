import React from 'react';
import {connect} from 'react-redux';
import AppOneChild from './AppOneChild.js';


function Topbanner(props) {
	return (
		<img src={'./images/topbanner.jpg'} style={{width:"100%", height:"180px"}}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(Topbanner);