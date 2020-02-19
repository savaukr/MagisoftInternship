/*
function createForm() {
	let modal = document.createElement('div');
	let form = document.createElement('form');
	let inputTitle = document.createElement('input');
	let inputDueDate = document.createElement('input');
	let buttonAdd = document.createElement('button');
	let buttonCancel = document.createElement('button');
	let date = new Date;
	buttonAdd.classList.add('create');
	buttonCancel.classList.add('cancel');
	buttonAdd.addEventListener('click', getDataFromForm);
	inputTitle.type='text';
	inputDueDate.type = 'date';
	inputDueDate.value =`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
	form.append(inputTitle);
	form.append(inputDueDate);
	form.append(button);
	modal.classList.add('modal');
	modal.append(form);
	body.append(modal);
}

function getDataFromForm() {

}
function isExitTodo() {

}
function createTodo(title,  dueDate) {
	return {'title':title, 'createdAt': new Date(), 'dueDate': dueDate}
}
*/
/*
function add(title, dueDate) {
	let strDate = "2020-02-20";
	let todoTask = new CreateTodoTask('go to shop', new Date(), new Date(strDate));
	console.log(todoTask)
	
	try {
	 	localStorage.setItem ('ключ', 'значення');
	}
	catch (e) { 
		if (e == QUOTA_EXCEEDED_ERR) {
			throw new Error('Ви сподіваєтесь виконати занадто багато');
		}
	}
	
}
*/

function addTodo(title, dueDate) {
	localStorage.setItem(title, JSON.stringify({createdAt:new Date(), dueDate:dueDate, isDone:false}))
}
export default addTodo;