import showAllTodo from '../core/showAllTodo/showAllTodo';
import showNotFinished from './notFinished/showNotFinished';
import tomorrow from './tomorrow/tomorrow';
import outDated from './outDated/outDated';

function todoFilters(mas) {
    let activeFilters = document.getElementsByClassName('active');
    let arr = [].concat(mas);
    if (!activeFilters.length) {
        showAllTodo(mas);
        //тут зберегти arr в localStorage
        return;
    }
    for (let i=0; i< activeFilters.length; i++) {
        switch (activeFilters[i].classList[0]) {
            case 'filters__not-finished':
                arr  = showNotFinished(arr);
                break;
            case 'filters__out-dated':
                arr = outDated(arr);
                break;
            case 'filters__tomorrow' :
                arr = tomorrow(arr);
                break;
            default:
                console.log('not filters');
                break;
        }
    }    
    showAllTodo(arr);
}
export default todoFilters;