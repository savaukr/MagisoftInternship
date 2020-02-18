//import {CreateTodoTask} from '../../core';

function add() {
	
	class CreateTodoTask {
		constructor(title, createdAt, dueDate){
			this.title = title;
			this.createdAt = createdAt;
			this.dueDate = dueDate;
		}
	}

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
export default add;


