import React, { useState } from 'react'
import '../CSS/taskList.scss'

export function TaskList(){

    const [tasks, setTasks] = useState(["Sample task"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if(newTask.trim() !== ""){

        
        setTasks(t => [...t, newTask]);
        setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i!== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    
    return(
        <div className="toDo-container">
            <h1 className="toDo-h1">Task List</h1>

            <div>
                <input className="toDo-input"
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}/>
                <button
                className="toDo-add-button"
                onClick={addTask}>
                Add
                </button>
            </div>

            <ol className="toDo-ol">
                {tasks.map((task, index) =>
                <li className="toDo-li" key={index}>
                    <span className="toDo-text">{task}</span>
                    <button
                        className="toDo-delete-button"
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button
                        className="toDo-move-button"
                        onClick={() => moveTaskUp(index)}>
                         👆   
                    </button>
                    <button
                        className="toDo-move-button"
                        onClick={() => moveTaskDown(index)}>
                         👇  
                    </button>
                </li>
            )}
            </ol>

            </div>

    )
}