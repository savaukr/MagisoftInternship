
/*import Parser from './scripts/parser';
import { add } from './scripts/core';*/
import './styles/style.scss';
import {parserString} from './scripts/core/parserString/parserString.js';
import {calcResult} from './scripts/core/calcResult.js';

try {
	console.log('Результат = '+calcResult(parserString('(6+2)*40')));
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