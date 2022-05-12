import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';


function Registration() {
    const [name, setName] = useState("");
  const [emailid, setEmailid] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name)
    console.log(emailid)
  }

  return (
    <form onSubmit={handleSubmit} class="col d-flex justify-content-center">
        <div class="form-outline mb-4" >
        <label>Enter your Name:
        <input 
        class="form-control"
        placeholder='Your name'
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label><br></br><br></br>
      <label>Enter your Emailid:
        <input 
        class="form-control"
        placeholder='Your Emailid'
          type="text" 
          value={emailid}
          onChange={(e) => setEmailid(e.target.value)}
        /> 
      </label><br></br><br></br>
      <label>Enter your Password:
        <input 
        class="form-control"
        placeholder='Your password'
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> 
      </label><br></br><br></br>
      <label>Enter your Confirm Password:
        <input 
        class="form-control"
        placeholder='Confirm password'
          type="password" 
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        /> 
      </label><br></br><br></br>
      <div>
      <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements 
                    </label>
                  </div>
                  
      <button type="submit" class="btn btn-primary btn-block mb-4">Sign Up</button>
      <div class="text-center text-lg-start mt-1 pt-2">
            <p class="small fw-bold mt-2 pt-1 mb-0">Alreadt have an account? <a href="/login"
                class="link-danger">Login</a></p>
          </div>
          </div>
      </div>
    </form>
  )
}
  
export default Registration;