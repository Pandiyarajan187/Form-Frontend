import React from 'react';
import Home from './Home';
import { Link } from 'react-router-dom'


function Navigation() {

  return (
//     <nav class="navbar navbar-light bg-light">
//     <div class="container-fluid">
//       <span class="navbar-text">
//         Navbar text with an inline element
//       </span>
//     </div>
//   </nav>
      <>
       <h4>Welcome User</h4>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
        < button class="btn btn-dark"><a href='/'>Home</a></button>
       < button class="btn btn-dark"><a href='/login'>Login</a></button> 
       < button class="btn btn-dark"> <a href='/registration'>Registration</a></button> 
       </div>
      </nav>
      </>
  )
}
  
export default Navigation;