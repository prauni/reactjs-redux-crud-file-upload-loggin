import React from 'react';
import '../App.css';
import {connect} from 'react-redux';


function Childapp(props) {
  return (
    <div className="Childapp" style={{backgroundColor:"#5cc17b",}}>
      <h3 style={{"display":"inline-block",}}>Redux using Function Component ( App01 ) :: My name is {props.myname} :: </h3>
	  <button onClick={()=>{props.changeName("Virat")}}>Change Name to Virat</button>
	  <button onClick={()=>{props.changeName("Dhoni")}}>Change Name to Dhoni</button>
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
export default connect(mapStateToProps,mapDispatchToProps)(Childapp);







