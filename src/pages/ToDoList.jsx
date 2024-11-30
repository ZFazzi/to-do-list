import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
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
                    {task}
                    <button onClick={() => moveTaskUp(index)}>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                    <button onClick={() => moveTaskDown(index)}>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                    <button onClick={() => removeTask(index)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </li>
                ))}
            </ul>
      </div>
    </div>
  );
};

export default TodoList;
