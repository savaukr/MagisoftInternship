function showNotFinished(mas) {
    let arr = [];
    for (let i=0; i<mas.length; i++) {
        if ( !mas[i].isDone )  arr.push(mas[i]) ;
    }
    return arr;
}
export default showNotFinished;