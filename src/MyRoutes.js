import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Navigation from './Navigation';
import Registration from './Registration';


function MyRoutes() {

  return (
      <div>
        <Router>
          <Navigation />
              <Routes>
                  <Route  path='/login' element={< Login/>}/>
                  <Route  path='/registration' element={< Registration/>}/>
                  <Route  path='/' element={< Home/>}/>
              </Routes>
        </Router>
      </div>
  )
}
  
export default MyRoutes;