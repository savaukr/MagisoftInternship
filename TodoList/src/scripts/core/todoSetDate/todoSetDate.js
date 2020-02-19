function todoSetDate(date) {
	let monthes=['JAN', 'FEB', 'MAT', 'APR', 'MAY', 'JUN', 'JUL', 'AG', 'SEP', 'OCT', 'NOV', 'DECM'];
	let days = ['SUN', 'MON', 'TU', 'WEN', 'TH', "FR", "SAT"]
	document.querySelector('.todo__dt').innerHTML=date.getDate();
	document.querySelector('.todo__month').innerHTML=monthes[date.getMonth()];
	document.querySelector('.todo__year').innerHTML=date.getFullYear();
	document.querySelector('.todo__day').innerHTML = days[date.getDay()];
};

export {todoSetDate};