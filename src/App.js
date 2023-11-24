import {useState } from 'react';
import './App.css';
import Header from './compnents/Header';
import Todo from './compnents/Todo';

const TASKS = [
  
]

function App() {
  const [enteredItem , setItem] = useState("")
  const [updateList , setList]= useState(TASKS)

  function handleInput(event){
    setItem(event.target.value)
  }

  function handleSubmit (item){
     setList((prevList => {
      let todoList = [...prevList]
      todoList.unshift({task : item , id: Math.random().toString()})
      return todoList
     }))
     
  };

  function handleDelete (keyId){
    setList(prevTasks =>{
       let todoList = prevTasks.filter(task => task.id !== keyId)
      return todoList
    })
    
  }
  let content;
  content = <p>No tasks Entered</p>
  if(updateList.length > 0){
    content =  <ul className='to-do-list'>
    {updateList.map((task) => <Todo 
    onDelete = {handleDelete}
    key = {task.id}
    id ={task.id}
    todo = {task.task}/>)}
  </ul>
  }
  
  return <div className='main'>
  <Header/>
   
  <div id="user-area">
      <p> Enter Your Task</p>
      <input type="text" value={enteredItem} onChange={handleInput}/>
      <button className="todo-btn" onClick={()=>{handleSubmit(enteredItem)}}>Add</button>
      
  </div>
  {content}
  
  
  </div>
     
}

export default App;
