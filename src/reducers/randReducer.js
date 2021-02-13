const randReducer = (state=1,action) =>{
	console.log('--- NR ----');
	if(action.type==='CHANGE_RAND'){
		return action.rand;
	}
	
	return state;
}

export default randReducer;
