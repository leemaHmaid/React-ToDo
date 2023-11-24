import { useState } from "react"
export default function Todo({todo,id, onDelete}){
    const [isDone , setDone] = useState(false)
    function handleClick (){
        onDelete(id)
    }
    function handleDoneClick (){
        setDone(isDone => !isDone)
    }
    return <div className="todo-item">
        <li style={{textDecoration : isDone ? "line-through" : "none"}}>{todo}</li>
        <span>
        <button className="todo-btn"
        onClick = {handleDoneClick}
        >{isDone ? "Undo" : "Done"}</button>
        <button className="todo-btn"
        onClick={handleClick}
        >delete</button>
         
        </span>
    </div>
}