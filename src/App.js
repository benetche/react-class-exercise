import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import React from 'react';
import Home from './Components/Home';
import Exercise1 from './Components/Exercise1';
import Exercise2 from './Components/Exercise2';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/exercise-1" element={<Exercise1/>}/>
        <Route path="/exercise-2" element={<Exercise2/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
