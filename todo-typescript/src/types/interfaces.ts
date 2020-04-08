export type typeTodo = {id?:string, title:string, createDate?: Date, dueDate: string, isDone:boolean} ;
export type typeTodos = Array<typeTodo>;
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
