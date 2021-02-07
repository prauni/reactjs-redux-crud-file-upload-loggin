import React from 'react';
import {connect} from 'react-redux';


function AppOne(props) {
	return (
		<div className="App" style={{textAlign:"center", marginBottom:"10px", backgroundColor:"#"+props.bgc, color:"#FFF"}}>
			<h3>Componenet One</h3>
			<h5>{props.myname}</h5>
			<h5>{props.sonage}</h5>
		</div>
	);
}

const mapStateToProps = (state)=>{
	return {
		myname:state.name,
		mywish:state.wishes,
		sonage:state.sonage,
		bgc:state.bgc
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		changeName:(name)=>{
			dispatch({type:'CHANGE_NAME',payload:name})
		},
		getNewName:(name)=>{dispatch({type:'GET_NewNAME',payload:name})},
	}
}	

export default connect(mapStateToProps,mapDispatchToProps)(AppOne);