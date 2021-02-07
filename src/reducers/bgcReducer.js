const bgcReducer = (state=1,action) =>{
	console.log('--- bgc ----');
	if(action.type==='BGC_Change'){
		console.log('--- riyan ----');
		return Math.floor((Math.random() * 1000000) + 1);
	}
	return state;
}

export default bgcReducer;
