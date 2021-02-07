import React from 'react';
import './../App.css';
import {connect} from 'react-redux';


function MyApp(props) {
	const mywish = props.mywish.map(item=>{return <li style={{color:"#FFF", width:"auto"}} key={Math.random()}>{item}</li>});
	return (
		<div className="App" style={{textAlign:"center", marginBottom:"10px", backgroundColor:"#111"}}>
			<table>
				<tbody>
					<tr>
						<td>
							<img src={'images/sonic-exe.jpg'} width="250" />
							<img src={'https://pm1.narvii.com/6699/1fa782c0db0693d5dbcfffd7e8deff7dd8fceec4_hq.jpg'} width="250" />
							<br />
						</td>
						<td>
							<h1 style={{"display":"inline-block",color:"#d4446c"}}>
								Riyan The King
							</h1>
							<br />
							<h4 style={{"display":"inline-block",color:"#d4446c"}}>
								Redux, Combine Reducer, Saga 
							</h4>
							<button onClick={props.onAgeUp} style={{cursor:"pointer"}} >
								My Age UP : {props.sonage}
							</button><br />
							<button onClick={()=>{props.changeName("Suresh")}} style={{cursor:"pointer"}} >
								Change Name to Suresh
							</button><br />
							<h3 style={{color:"#FFF"}}>-- {props.myname} --</h3>
							<h3 style={{color:"#F00"}}>Mother Componenet</h3>
							<a style={{cursor:"pointer", color:"#15b5c5"}} onClick={()=>{props.getNewName("LION RAJA")}}>
								Combine Reducer Form Redux
							</a><br />
							<ul style={{listStyleType:"none"}}>
								{mywish}
							</ul>						
						</td>						
					</tr>
				</tbody>
			</table>		
		</div>
	);
}

const mapStateToProps = (state)=>{
	return {
		sonage: state.sonage,
		myname:state.name,
		mywish:state.wishes,
		bgc:state.bgc,
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		onAgeUp: () => {
			dispatch({ type: "AGE_UP", sonage : Math.floor((Math.random() * 1000) + 1) });
			dispatch({type:'BGC_Change',payload:1});
			//this.props.getNewName('hello');
		},
		changeName:(name)=>{dispatch({type:'CHANGE_NAME',payload:name})},
		getNewName:(name)=>{
			//dispatch({type:'PLZWAIT',payload:'Please wait'})
			
			fetch("https://jsonplaceholder.typicode.com/users")
			.then((result)=>result.json())
			.then((result2)=>{
				console.log(result2[Math.floor((Math.random() * 10))].name);
				dispatch({type:'GET_NewNAME',payload:result2[Math.floor((Math.random() * 10))].name})				
			});
			
			dispatch({type:'PLZWAIT',payload:'Please wait'})

		},
	}
}	

export default connect(mapStateToProps,mapDispatchToProps)(MyApp);