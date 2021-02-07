const sonageReducer = (state=1,action) =>{
	console.log('--- NR ----');
	if(action.type==='AGE_UP'){
		return action.sonage + ' Years, ' + Math.floor((Math.random() * 100) + 1) + ' Days';
	}
	if(action.type==='AGE_UP_ASYNC'){
		return action.myage + ' Years, ' + Math.floor((Math.random() * 10) + 1) + ' Days';
	}
	return state;
}

export default sonageReducer;
