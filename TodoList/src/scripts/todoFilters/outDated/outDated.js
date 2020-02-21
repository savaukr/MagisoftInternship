function outDated(mas) {
    let arr = [];
    for (let i=0; i<mas.length; i++) {
        if ( new Date(mas[i].dueDate).getTime() < new Date().getTime() )  {
            arr.push(mas[i]) ;
        }
    }
    return arr;
}
export default outDated;