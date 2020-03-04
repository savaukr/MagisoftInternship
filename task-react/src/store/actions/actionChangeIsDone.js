export const CHANGE_IS_DONE = "CHANGE_IS_DONE";
export const changeIsDone = isDone => ({
    type: CHANGE_IS_DONE, 
    payload: !isDone
})