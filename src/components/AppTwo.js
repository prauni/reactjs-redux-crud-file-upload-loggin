import React from 'react';
import {connect} from 'react-redux';


function AppTwo(props) {
	return (
		<div className="App" style={{textAlign:"center", marginBottom:"10px", backgroundColor:"#950", color:"#FFF"}}>
			<h3>Componenet Two</h3>
			<h5>{props.myname}</h5>
			<h5>{props.myage}</h5>
		</div>
	);
}

const mapStateToProps = (state)=>{
	return {
		myname:state.name,
		mywish:state.wishes,
		myage:state.sonage
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		changeName:(name)=>{dispatch({type:'CHANGE_NAME',payload:name})},
		getNewName:(name)=>{dispatch({type:'GET_NewNAME',payload:name})},
	}
}	

export default connect(mapStateToProps,mapDispatchToProps)(AppTwo);