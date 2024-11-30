import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ToDoList from '../pages/ToDoList.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ToDoList />} />
      </Routes>
    </Router>
  );
}

export default App;