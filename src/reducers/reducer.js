const iState = {
	name:"Small-King",
	msage:1,
	wishes:['Zooooo','Eco-Park']
}
const reducer = (state=iState,action) => {
	if(action.type==='CHANGE_NAME'){
		return {
			...state,
			name:action.payload
		}
	}
	return state;
}

export default reducer;