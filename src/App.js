import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import CreateUser from './components/CreateUser';
import CreateExercise from './components/CreateExercise';
import EditExercise from './components/EditExercise'
import ExerciseList from './components/ExerciseList'
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ExerciseList />}>
          </Route>
          <Route path="/createuser" element={<CreateUser />}>
          </Route>
          <Route path="/createexercise" element={<CreateExercise />}>
          </Route>
          <Route path="/edit/:id"  element={<EditExercise/>}>
          </Route>
        </Routes>
      </div>
  </Router>

  );
}

export default App;
