// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

console.log('hello from index')
const initialState = 0;
const reducer = (state = initialState, action) => {
	
	switch (action.type) {
		case 'INC' :
			return ++state;
		case 'DEC': 
			return --state;
		default:
			return state; 
	}	
}
let state = reducer(undefined, {});
console.log('state = ', state);
state = reducer(state, {type:'INC'});
console.log('state = ', state);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

