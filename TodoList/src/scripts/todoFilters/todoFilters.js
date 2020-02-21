import showAllTodo from '../core/showAllTodo/showAllTodo';
import showNotFinished from './notFinished/showNotFinished';
function todoFilters(mas) {
    let activeFilters = document.getElementsByClassName('active');
    console.log(activeFilters);
    let arr  = showNotFinished(mas);
    showAllTodo(arr);
}
export default todoFilters;