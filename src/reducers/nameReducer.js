const nameReducer = (state='',action) =>{
	console.log('--- NR ----');
	
	if(action.type==='GET_NewNAME'){
		return action.payload+'5';
	}
	
	if(action.type==='PLZWAIT'){
		return action.payload + ' ' + Math.floor((Math.random() * 100) + 1);
	}
	
	return state;
}

export default nameReducer;
