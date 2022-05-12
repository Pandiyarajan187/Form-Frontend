import React from 'react';
import { useState } from 'react';


function Login() {
  const [emailid, setEmailid] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emailid)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your Emailid:
        <input 
          type="text" 
          value={emailid}
          onChange={(e) => setEmailid(e.target.value)}
        /><br></br><br></br>
      </label>
      <label>Enter your Password:
        <input 
          type="text" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br></br><br></br>
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
  
export default Login;