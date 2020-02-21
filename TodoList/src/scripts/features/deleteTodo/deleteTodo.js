function deleteTodo(mas, id) {
	//let arr = [].concat(mas);
	let arr = JSON.parse(localStorage.getItem('todo'));
	for (let i=0; i< arr.length; i++) {
		if (arr[i].id == id) {
			arr.splice(i,1);
			return arr;
		}
	}
	return arr;
}
export default deleteTodo;