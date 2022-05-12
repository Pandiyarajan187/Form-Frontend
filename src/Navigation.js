import React from 'react';
import Home from './Home';
import { Link } from 'react-router-dom'


function Navigation() {

  return (
      <div>
        <h4>Welcome User</h4>
        < button>
         <a href='/'>Home</a>
         </button>
       < button><a href='/login'>Login</a></button> 
       < button> <a href='/registration'>Registration</a></button> 
      </div>
  )
}
  
export default Navigation;