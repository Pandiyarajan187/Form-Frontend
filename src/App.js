import MyRoutes from './MyRoutes'
//import { Routes } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Button'
import Navigation from './Navigation';
import Login from './Login';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div app='container'>
      {/* <Button/> */}
      < MyRoutes />
    </div>
  );
}

export default App;
