import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import React from 'react';
import Home from './Components/Home';
import Exercise1 from './Components/Exercise1';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/exercise-1" element={<Exercise1/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
