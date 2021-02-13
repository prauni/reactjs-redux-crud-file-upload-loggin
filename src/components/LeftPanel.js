import React from 'react';
import {connect} from 'react-redux';
import AppOneChild from './AppOneChild.js';


function LeftPanel(props) {
	return (
		<div>
			LeftPanel
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

export default connect(mapStateToProps,mapDispatchToProps)(LeftPanel);