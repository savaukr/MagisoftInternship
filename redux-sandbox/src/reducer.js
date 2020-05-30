const initialState = 10;
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INC' :
			return ++state;
		case 'DEC': 
			return --state;
		case 'RND': 
			return state + action.payload;
		default:
			return state; 
	}	
}
export default reducer;