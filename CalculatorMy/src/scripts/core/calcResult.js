import {add}  from './add/add.js';
import {subtract}  from './subtract/subtract.js';
import {multiply} from './multiply/multiply.js';
import {divide} from './divide/divide.js';

let stec_numbers =[];
let stec_actions = [];
let action_priority = {'+': 1, '-':1, '*':2, '/':2};
let result='NO';

const ifNumber = (number)=>{
	stec_numbers.push(number);
	console.log(stec_numbers);
}
const ifAction = (action)=>{
 	let last_action = stec_actions[stec_actions.length-1] || false;
 	while ( (last_action !== false) && (action_priority[action] <= action_priority[last_action]) ) {
 		calculate();
 		last_action = stec_actions[stec_actions.length-1] || false;
 	}
 	stec_actions.push(action);
 	console.log(stec_actions);
}
const ifParenthesis = (item)=>{
	if (item == '(') {
		stec_actions.push(item);
	}
		else {
			while( stec_actions[stec_actions.length-1] !== '(' ) {
				calculate()
			}
			stec_actions.pop();
		};
}
const calculate = ()=> {
		let last={}, num;
		last.number = stec_numbers[stec_numbers.length-1] || false;
		last.prev_number = stec_numbers[stec_numbers.length-2] || false;
		last.action = stec_actions[stec_actions.length-1] || false;
		if (last.prev_number === false) {console.log("last.number="+last.number); return;}
		switch (last.action) {
	        case "+":  
	        	num = add(+last.prev_number,+last.number);
	        	break;
	        case "-": 
	        	num = subtract(+last.prev_number,+last.number);
	        	break;
	        case "*":  
	        	num = multiply(last.prev_number, last.number);
	        	break;
	        case "/":  
	        	num = divide(last.prev_number, last.number);
	        	break;
	        }
		//let num = eval(`${last.prev_number}${last.action}${last.number}`);
		stec_numbers.splice(-2, 2);
		stec_numbers.push(num);
		stec_actions.pop();
}

const calcResult = (arr)=>{
	try {
			for (let i=0; i < arr.length; i++) {
				if (arr[i].search(/\d+/) != -1) {ifNumber(arr[i])}
					else if ((arr[i]).search(/[-+*\/]/) !=-1 ) { ifAction(arr[i])}
						else if ((arr[i]).search(/[()]/) !=-1 ) {ifParenthesis(arr[i]);}
			}
			while(stec_actions[stec_actions.length-1]) calculate();
			//console.log('result ='+stec_numbers[0]);
			return stec_numbers[0];
	} catch (err) {
		throw new Error(err.message);
	}
}
export {calcResult};