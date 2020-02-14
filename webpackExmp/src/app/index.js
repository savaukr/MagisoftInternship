import '../style/app.scss';
//import calc from "./calc.js";
let stec_numbers =[];
let stec_actions = [];
let action_priority = {'+': 1, '-':1, '*':2, '/':2};
let last ={};
let calc = {} ;
let result='NO';

calc.validate = (str)=>{
	if (/^[-+()*\/0-9\s]+$/.test(str)) {
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

calc.pars = ()=>{
	let str = document.querySelector('.calc__input').value;
	if (calc.validate(str)) {
		let arr= str.split('');
		for (let i=0; i < arr.length; i++) {
			if (arr[i].search(/\d+/) != -1) {console.log(`${arr[i]}=number`); calc.ifNumber(arr[i])}
				else if ((arr[i]).search(/[-+*\/]/) !=-1 ) {console.log(`${arr[i]} = action`); calc.ifAction(arr[i])}
					else if ((arr[i]).search(/[()]/) !=-1 ) {console.log(`${arr[i]}=parenthesis`); calc.ifParenthesis(arr[i]);}
		}
		while(stec_actions[stec_actions.length-1]) calc.calculate();
		console.log('result ='+stec_numbers[0]);
	} 
	result = stec_numbers[0];
	document.querySelector('.calc__result').innerHTML = result;
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
	/*
	let last ={};
	last.action = stec_actions[stec_actions.length-1] || false;
	last.number = stec_numbers[stec_numbers.length-1] || false;
	last.prev_number = stec_numbers[stec_numbers.length-2] || false;
	if (last.number === false || prev_last === false) return;

	while (last.action !== false && action_priority[action] <= action_priority[last.action]) {
		last.action = stec_actions[stec_actions.length-1] || false;
		calc.calculation(last.action,last.number, last.prev_number);
	} 

	stec_actions.push(action);
*/
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

document.querySelector('.calc__calculate').addEventListener('click', calc.pars);
