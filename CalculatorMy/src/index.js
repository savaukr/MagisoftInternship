import './styles/style.scss';
import {parserString} from './scripts/core/parserString/parserString.js';
import {calc} from './scripts/core/calcResult.js';



try {
	function getStr(elem) {
		return elem.value;
	} 
	let elemResult = document.querySelector('.calc__result');
	document.querySelector('.calc__calculate').addEventListener('click',
		 (e)=>{
		 	e.preventDefault();
		 	let str = getStr(document.querySelector('.calc__input'));
		 	//alert(str);
		 	let result = calc.calcResult(parserString(str)).toFixed(3);
		 	//alert(result);
		 	elemResult.innerHTML = result;
		 	console.log('Результат = '+result);
	})
}
catch(err) {
	console.log('Виникла помилка:'+err.message);
}


/*
const p = new Parser();

function evaluateAsFloat(code) {
    function evaluate(obj) {
        switch (obj.type) {
        case "number":  return parseInt(obj.value);
        case "+":  return add(evaluate(obj.left), evaluate(obj.right));
        // todo: добавить остальные операции, написать на них тесты 
        }
    }
    return evaluate(p.parse(code));
}

// работает только с "+", добавьте остальные операции 
console.log(evaluateAsFloat('1 + 2 + 3 + 47'));
*/