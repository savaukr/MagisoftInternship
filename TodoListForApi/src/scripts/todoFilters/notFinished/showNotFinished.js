function showNotFinished(mas) {
   // mas  = JSON.parse(localStorage.getItem('todo'));
    let arr = [];
    for (let i=0; i<mas.length; i++) {
        if ( !mas[i].isDone )  arr.push(mas[i]) ;
    }
    return arr;

    // mas.filter(item => !item.isDone)
}
export default showNotFinished;