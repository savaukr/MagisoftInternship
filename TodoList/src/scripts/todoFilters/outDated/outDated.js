function outDated(mas) {
    let arr = [];
    for (let i=0; i<mas.length; i++) {
        if ( new Date(mas[i].dueDate).getTime()+24*3600*1000 < (new Date().getTime()) )  {            
            arr.push(mas[i]) ;
        }
    }
    return arr;
}
export default outDated;