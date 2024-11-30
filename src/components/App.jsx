import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ToDoList from '../pages/ToDoList.jsx';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">To-Do List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ToDoList />} />
      </Routes>
    </Router>
  );
}

export default App;