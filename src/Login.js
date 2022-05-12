import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';


function Login() {
  const [emailid, setEmailid] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emailid)
  }

  return (
     
    <form onSubmit={handleSubmit} class="col d-flex justify-content-center">
         <div class="form-outline mb-4" >
      <label>Enter your Email id:
        <input 
         class="form-control"
          type="email" 
          placeholder='Email id'
          value={emailid}
          onChange={(e) => setEmailid(e.target.value)}
        />
      </label> <br></br><br></br>
      <div  class="form-outline mb-4">
      <label>Enter your Password:
        <input 
         class="form-control"
          type="password" 
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label> <br></br>
      </div>
  
      <div class="col d-flex justify-content-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" unchecked />
        <label class="form-check-label"> Remember me </label>
      </div>
      <div class="col">
      <a href="/forgotpassword">Forgot password?</a>
    </div>
    </div><br></br>
    <button type="submit" class="btn btn-primary btn-block mb-2">Login</button>
    <div class="text-center text-lg-start mt-1 pt-2">
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/registration"
                class="link-danger">Register</a></p>
          </div>
      </div>
    </form>
 
  )
}
  
export default Login;