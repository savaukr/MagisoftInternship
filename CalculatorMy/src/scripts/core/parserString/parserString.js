const parserString = (str)=>{
    const validate = (str)=>{
        if (/^[-+()*\.\/0-9\s]+$/.test(str)) {
            try {
                //console.log('eval ='+ eval(str));
                return true;
            }
            catch (err) {
                throw new Error("Помилка: " + err.message)
                //alert("Помилка: " + e.message);
                return false;
            };
        }
        else {
            throw new Error('Можна вводити числа та  знаки: «+», «-», «*», «/», «(» и «)».');
            //alert('Можна вводити числа та  знаки: «+», «-», «*», «/», «(» и «)».');
            return false
        };
    }

    let arr=[];
    if (validate(str)) {
        arr = str.match(/\.\d+|\d+\.?\d*|./g);
    }
    //console.log('arr='+ arr);
    return arr;
}
export {parserString};