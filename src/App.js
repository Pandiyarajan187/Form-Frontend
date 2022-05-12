import MyRoutes from './MyRoutes'
//import { Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Login from './Login';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div app='container'>
      < MyRoutes />
    </div>
  );
}

export default App;
