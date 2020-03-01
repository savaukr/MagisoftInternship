function tomorrow(mas) {
    let dayInMls = 24*60*60*1000;
    let arr = [];
    for (let i=0; i<mas.length; i++) {
        if ( new Date(mas[i].dueDate).getTime() < new Date().getTime()+dayInMls && new Date(mas[i].dueDate).getTime()>new Date() )  arr.push(mas[i]) ;
    }
    return arr;
}
export default tomorrow;