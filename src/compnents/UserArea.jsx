export default function UserArea({value , onChangeName , onSumbitPresseed}){
    function onClickPressed (value){
        onSumbitPresseed(value)
    }
    return <div id="user-area">
      <p> Enter Your Task</p>
      <input type="text" value={value} onChange={onChangeName}/>
      <button className="todo-btn" onClick={(value)=>onClickPressed(value)}>Add</button>
      
    </div>
}