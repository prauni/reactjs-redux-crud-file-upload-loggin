import React from 'react';
import {connect} from 'react-redux';
import Clock from './Clock.js';

function AppOneChild(props) {
	//let rand = Math.floor((Math.random() * 10) + 1)
	
	/*if(parseInt(props.rand) < 5){
		return (
			<div className="App" style={{textAlign:"center", marginBottom:"10px", backgroundColor:"#"+props.bgc, color:"#FFF"}}>
				<h3>Componenet One Child</h3>
				<Clock />
				<h5>Here</h5>
				<button onClick={()=>{props.updateRand()}} style={{cursor:"pointer"}} >RANDOM NUMBER :: {props.rand}</button>
			</div>
		)
	}*/
	
	return (
		<div className="App" style={{textAlign:"center", marginBottom:"10px", backgroundColor:"#"+props.bgc, color:"#FFF"}}>
			<h3>Componenet One Child</h3>
			{parseInt(props.rand) < 5 ? (
				<div>
					<Clock />			
					<h5>----- There ----</h5>
				</div>
			) : (
				<h5>Here</h5>
			)}
			<button onClick={()=>{props.updateRand()}} style={{cursor:"pointer"}} >RANDOM NUMBER :: {props.rand}</button>
		</div>
	);
}

const mapStateToProps = (state)=>{
	return {
		myname:state.name,
		mywish:state.wishes,
		sonage:state.sonage,
		bgc:state.bgc,
		rand:state.rand
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		updateRand:()=>{
			dispatch({type:'CHANGE_RAND',rand:Math.floor((Math.random() * 10) + 1)})
		},
		changeName:(name)=>{
			dispatch({type:'CHANGE_NAME',payload:name})
		},
		getNewName:(name)=>{dispatch({type:'GET_NewNAME',payload:name})},
	}
}	

export default connect(mapStateToProps,mapDispatchToProps)(AppOneChild);