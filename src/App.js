import './App.css';
import SigninNav from './components/SigninNav';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/signin' element={<SigninNav/>}/>
      </Routes>  

    </Router>
    </>
  );
}

export default App;
