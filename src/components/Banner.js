import React from 'react';
import {connect} from 'react-redux';
import AppOneChild from './AppOneChild.js';


function Banner(props) {
	return (
		<div>
			Banner
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

export default connect(mapStateToProps,mapDispatchToProps)(Banner);