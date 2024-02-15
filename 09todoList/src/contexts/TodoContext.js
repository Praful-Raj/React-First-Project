import { createContext, useContext } from "react";

export default TodoContext = createContext({
    Todos:[
        {
            id:1,
            todo:"Todo Message",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id, todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}
})

export const useTodo =()=>{
    return useContext(TodoContext)
}

export const TodoProvider= TodoContext.Provider