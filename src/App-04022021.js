import React from 'react';
import './App.css';
import {connect} from 'react-redux';


function App(props) {
  return (
    <div className="App" style={{textAlign:"left"}}>
      <h3 style={{"display":"inline-block",}}>Redux using Function Component ( App ):: My name is {props.myname} :: </h3>
	  <button onClick={()=>{props.changeName("Suresh")}}>Change Name to Suresh</button>
    </div>
  );
}

const mapStateToProps = (state)=>{
	return {
		myname:state.name
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		changeName:(name)=>{dispatch({type:'CHANGE_NAME',payload:name})}
	}
}	

export default connect(mapStateToProps,mapDispatchToProps)(App);