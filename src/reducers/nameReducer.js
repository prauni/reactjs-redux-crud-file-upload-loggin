const nameReducer = (state='',action) =>{
	console.log('--------');
	if(action.type==='GET_NewNAME'){
		return action.payload + ' =>>= ' + Math.floor((Math.random() * 100) + 1);
	}
	
	if(action.type==='PLZWAIT'){
		return action.payload + ' =>>= ' + Math.floor((Math.random() * 100) + 1);
	}
	return state;
}

export default nameReducer;
