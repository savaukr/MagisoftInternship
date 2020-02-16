// import '../style/app.scss';
//import {user} from "./user.js";

let stec_numbers =[];
let stec_actions = [];
let action_priority = {'+': 1, '-':1, '*':2, '/':2};
let calc = {} ;
let result='NO';
//let str = document.querySelector('.calc__input').value;

calc.validate = (str)=>{
	if (/^[-+()*\.\/0-9\s]+$/.test(str)) {
        try {
            console.log('eval ='+ eval(str));
            return true;
        }
        catch (e) {
            alert("Помилка: " + e.message);
            return false;
        };
    }
    else {
        alert('Можна вводити числа та  знаки: «+», «-», «*», «/», «(» и «)».');
        return false
    };
}

calc.parse = (str)=>{
	let arr=[];
	if (calc.validate(str)) {
		arr = str.match(/\.\d+|\d+\.?\d*|./g);
	}
	console.log('arr='+ arr);
	return arr;
}

calc.findResult = (str)=>{
	let arr = calc.parse(str);
		for (let i=0; i < arr.length; i++) {
			if (arr[i].search(/\d+/) != -1) {calc.ifNumber(arr[i])}
				else if ((arr[i]).search(/[-+*\/]/) !=-1 ) { calc.ifAction(arr[i])}
					else if ((arr[i]).search(/[()]/) !=-1 ) { calc.ifParenthesis(arr[i]);}
		}
		while(stec_actions[stec_actions.length-1]) calc.calculate();
		//console.log('result ='+stec_numbers[0]);
	return stec_numbers[0];;
}

calc.ifNumber = (number)=>{
	stec_numbers.push(number);
	console.log(stec_numbers);
}
calc.ifAction = (action)=>{
 	let last_action = stec_actions[stec_actions.length-1] || false;
 	while ( (last_action !== false) && (action_priority[action] <= action_priority[last_action]) ) {
 		calc.calculate();
 		last_action = stec_actions[stec_actions.length-1] || false;
 	}
 	stec_actions.push(action);
 	console.log(stec_actions);
}
calc.ifParenthesis = (item)=>{
	if (item == '(') {
		stec_actions.push(item);
	}
		else {
			while( stec_actions[stec_actions.length-1] !== '(' ) {
				calc.calculate()
			}
			stec_actions.pop();
		};
}
calc.calculate = ()=> {
	let last={};
	last.number = stec_numbers[stec_numbers.length-1] || false;
	last.prev_number = stec_numbers[stec_numbers.length-2] || false;
	last.action = stec_actions[stec_actions.length-1] || false;
	if (last.prev_number === false) {console.log("last.number="+last.number); return;}
	let num = eval(`${last.prev_number}${last.action}${last.number}`);
	stec_numbers.splice(-2, 2);
	stec_numbers.push(num);
	stec_actions.pop();
}
/*
document.querySelector('.calc__calculate').addEventListener('click',
	 (e)=>{
	 	e.preventDefault();
	 	result = calc.findResult(document.querySelector('.calc__input').value);
	 	document.querySelector('.calc__result').innerHTML = result.toFixed(3);
	 }
);
*/
module.exports = calc.findResult;