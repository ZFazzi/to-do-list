import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const TodoList = () => {
  const [tasks, setTasks] = useState([]); /*tasks is the intial value, empty array*/ /*setTasks updates tasks*/
  const [newTask, setNewTask] = useState(''); /*newTask stores the input text for new tasks*/ /*setNewTask updates newTask*/

  const addTask = () => {
    if (newTask.trim() !== '') { /*trim removes extra spaces and makes sure you cant add a space as a task*/
      setTasks([...tasks, newTask]); /*setTasks uses the spread operator (...tasks) to keep existing tasks and adds the new one at the end*/
      setNewTask(''); /*clears the input box*/
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));   /*filter "hides" the deleted task*/
  };

  const moveTaskUp = (index) => {
    if (index > 0) {            /*is the task on top?*/
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];  /*swaps position of the tasks*/
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {  
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };
                                                    /*tasks.map loops through the tasks and creates a new <li> for each task*/
  return (
    
    <div className="background"> 
        <div className="container">
            <h1>To-Do List</h1>
            <div>
                <input 
                type="text" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a task" 
                />
                <button onClick={addTask}>Add</button>   
            </div>
            <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                <div className="task-content">
                    <input type="checkbox" onChange={() => console.log(`Task ${index} toggled`)} />
                    <span className="task-text">{task}</span>
                </div>
                <div className="button-group">
                    <button onClick={() => moveTaskUp(index)}>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                    <button onClick={() => moveTaskDown(index)}>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                    <button onClick={() => removeTask(index)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
                </li>
            ))}
            </ul>
      </div>
    </div>
  );
};

export default TodoList;
