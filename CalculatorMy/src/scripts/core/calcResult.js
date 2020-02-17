import {add}  from './add/add.js';
import {subtract}  from './subtract/subtract.js';
import {multiply} from './multiply/multiply.js';
import {divide} from './divide/divide.js';

class CalcResult {
	constructor() {
		this.stec_numbers =[];
		this.stec_actions = [];
		this.action_priority = {'+': 1, '-':1, '*':2, '/':2};
		this.result='NO';
	}
	ifNumber(number) {
		this.stec_numbers.push(number);
		//console.log(this.stec_numbers);
	}
	ifAction (action) {
 		let last_action = this.stec_actions[this.stec_actions.length-1] || false;
 		while ( (last_action !== false) && (this.action_priority[action] <= this.action_priority[last_action]) ) {
 		this.calculate();
 		last_action = this.stec_actions[this.stec_actions.length-1] || false;
	 	}
	 	this.stec_actions.push(action);
	 	//console.log(this.stec_actions);
	}
	ifParenthesis(item){
		if (item == '(') {
			this.stec_actions.push(item);
		}	
			else {
				while( this.stec_actions[this.stec_actions.length-1] !== '(' ) {
					this.calculate()
				}
				this.stec_actions.pop();
			};
	}
	calculate() {
		let last={}, num;
		last.number = this.stec_numbers[this.stec_numbers.length-1] || false;
		last.prev_number = this.stec_numbers[this.stec_numbers.length-2] || false;
		last.action = this.stec_actions[this.stec_actions.length-1] || false;
		//if (last.prev_number === false) {console.log("last.number="+last.number); return;}
		switch (last.action) {
	        case "+":  
	        	num = add(+last.prev_number,+last.number);
	        	break;
	        case "-": 
	        	num = subtract(last.prev_number,last.number);
	        	break;
	        case "*":  
	        	num = multiply(last.prev_number, last.number);
	        	break;
	        case "/":  
	        	num = divide(last.prev_number, last.number);
	        	break;
	        }
		this.stec_numbers.splice(-2, 2);
		this.stec_numbers.push(num);
		this.stec_actions.pop();
	}

	calcResult(arr) {
		try {
				for (let i=0; i < arr.length; i++) {
					if (arr[i].search(/\d+/) != -1) {this.ifNumber(arr[i])}
						else if ((arr[i]).search(/[-+*\/]/) !=-1 ) { this.ifAction(arr[i])}
							else if ((arr[i]).search(/[()]/) !=-1 ) {this.ifParenthesis(arr[i]);}
				}
				while(this.stec_actions[this.stec_actions.length-1]) this.calculate();
				return this.stec_numbers[0];
		} catch (err) {
			throw new Error(err.message);
		}
	}
}

const calc = new CalcResult();
export {calc};