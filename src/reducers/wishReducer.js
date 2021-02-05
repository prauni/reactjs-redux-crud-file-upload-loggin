const wishReducer = (state=[],action) =>{
	console.log('--------');
	if(action.type==='GET_NewNAME'){
		return [...state,action.payload + ' -- '+Math.floor((Math.random() * 100) + 1)]
	}
	return state;
}

export default wishReducer;
