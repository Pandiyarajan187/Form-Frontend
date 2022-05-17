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
                    < button class="btn btn-dark"><Link  class="btn btn-primary" to='/'>Home</Link></button>
                    < button class="btn btn-dark"> <Link class="btn btn-primary" to='/registration'>Registration</Link></button>
                    < button class="btn btn-dark"><Link class="btn btn-primary" to='/login'>Login</Link></button>
                    < button class="btn btn-dark"> <Link class="btn btn-primary" to='/logout'>Logout</Link></button>

                </div>
            </nav>
        </>
    )
}

export default Navigation;

// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import Button from "@material-ui/core/Button";
// import MenuIcon from "@material-ui/icons/Menu";
// // import ModalDialog from './ModalDialog';
// import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// const Navbar = () => {
//   const classes = useStyles();
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <IconButton
//           edge="start"
//           color="inherit"
//           aria-label="menu"
//           className={classes.menuButton}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6" className={classes.title}>
//         <Link to="/home">
//            Home
//           </Link>
//         </Typography>
//         <Button color="secondary">
//           <Link to="/registration">
//             Register
//           </Link>
//         </Button>
//         <Button color="inherit" onClick={handleOpen}>
//         <Link to="/login">
//             login
//           </Link>
//         </Button>
//         <Button color="inherit" onClick={handleOpen}>
//         <Link to="/logout">
//             Logout
//           </Link>
//         </Button>
//       </Toolbar>
//       {/* <ModalDialog open={open} handleClose={handleClose} /> */}
//     </AppBar>
//   );
// };

// export default Navbar;
