import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import Navigation from './Navigation';
import Registration from './Registration';


function MyRoutes() {

  return (
      <div>
        <Router>
          <Navigation /><br></br>
              <Routes>
                  <Route  path='/' element={< Home/>}/>
                  <Route  path='/login' element={< Login/>}/>
                  <Route  path='/registration' element={< Registration/>}/>
                  <Route  path='/logout' element={< Login/>}/>
              </Routes>
        </Router>
      </div>
  )
}
  
export default MyRoutes;