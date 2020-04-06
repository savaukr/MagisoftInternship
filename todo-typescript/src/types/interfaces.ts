export type typeTodo = {id:string, title:string, createDate?: Date, dueDate: string, isDone:boolean};
export type typeTodos = typeTodo[];
export type  typeFilters = {
    [key:string]:boolean
}

export interface IState {
    todos: typeTodos       
    objFilters: typeFilters
    todosFilter: typeTodos  
    isLoading: boolean
    isError: boolean
}

export interface IAction {
    type: string
    payload?:   any
}