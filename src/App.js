import React from 'react';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import CreateUser from './components/CreateUser';
import CreateExercise from './components/CreateExercise';
import EditExercise from './components/EditExercise'
import ExerciseList from './components/ExerciseList'



const App=()=> 
{
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
   if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  } 
  return (
    <>
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
            <Route path="/edit/:id" element={<EditExercise />}>
            </Route>            
          </Routes>
        </div>
       </Router>
      
      
      <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button className='button' onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
    </>
  ); 
  }
export default App;
