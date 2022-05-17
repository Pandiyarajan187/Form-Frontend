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
            <h2 className='text-center'>Welcome User</h2>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    < button class="btn btn-dark"><a class="btn btn-primary" href='/'>Home</a></button>
                    < button class="btn btn-dark"> <a class="btn btn-primary" href='/registration'>Registration</a></button>
                    < button class="btn btn-dark"><a class="btn btn-primary" href='/login'>Login</a></button>
                    < button class="btn btn-dark"> <a class="btn btn-primary" href='/logout'>Logout</a></button>

                </div>
            </nav>
        </>
    )
}

export default Navigation;