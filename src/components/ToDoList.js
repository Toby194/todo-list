import React, { useState }from 'react';


const ToDoList= (props) => {
    const {tasklist, setTasklist} = props;
    let newtask = {
        title: "",
        isCompleted: false

    };
    

    
return (
    <>
        <div className="container">
            <input type={onChange} name= "task" name="newTask"/>
            <button onClick={onClick}>Add Task</button>
        </div>
    </>
    

    )
}
export default ToDoList;