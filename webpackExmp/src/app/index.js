import '../style/app.scss';
//import calc from "./calc.js";
let stec_numbers =[];
let stec_actions = [];
let input  = document.querySelector('.calc__input');
let action_priority = {'+': 1, '-':1, '*':2, '':2};

let calc = {} ;
calc.validate = (str)=>{
	if (/^[-+()*\/0-9\s]+$/.test(str)) {
        try {
            console.log(eval(str));
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
			if (arr[i].search(/\d+/) != -1) console.log(`${arr[i]}=number`);
				else if ((arr[i]).search(/[-+*\/]/) !=-1 ) console.log(`${arr[i]} = action`);
					else if ((arr[i]).search(/[()]/) !=-1 ) console.log(`${arr[i]}=parenthesis`);
		}
	} 
}
calc.ifNumber = (item)=>{
	stec_numbers.push(item);
}
calc.ifAction = (action)=>{
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

}
calc.ifParenthesis = (item)=>{
	if (item == '(') {}
		else {};
}
calc.calculation = (last)=> {
	let num = eval(`${last.prev_number}${last.action}${last.number}`);
	stec_numbers.splice(-2, 2);
	stec_numbers.push(num);
	stec_actions.pop();
}

document.querySelector('.calc__calculate').addEventListener('click', calc.pars);