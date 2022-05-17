<<<<<<< HEAD
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { TextField } from "@material-ui/core";
import { Button } from "material-ui-core";
import validator from "validator";

function Registration() {
  
  const [text, setText] = useState("");
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [name, setName] = useState("");

  const [formValue, setformValue] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  // const handleChange = (event) => {
  //     setformValue({
  //       ...formValue,
  //       [event.target.name]: event.target.value
  //     });
  //   }

  const handleSubmit = () => {
    const loginFormData = new FormData();
    loginFormData.append("name", formValue.name);
    loginFormData.append("email", formValue.email);
    loginFormData.append("password", formValue.password);
    loginFormData.append("password2", formValue.password2);

    axios
      .post("/api/register")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password2: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  const newLocal = "Invalid";
  return (
    <form onSubmit={handleSubmit} class="col d-flex justify-content-center">
      <div class="form-outline mb-4">
        <label>
          Enter your Name:
          <br></br>
          <TextField
            variant="filled"
            type="text"
            placeholder="Enter your First name"
            name="name"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
           error={text}
            helperText={
              text !== text.charAt(0).toUpperCase() + text.slice(1)
                ? "Enter First Letter As Capital "
                : ""
            }
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Enter your Emailid:
          <br></br>
          <TextField
            variant="filled"
            type="email"
            placeholder="Enter your Email"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={email}
             helperText={ email.length < 1 || email.endsWith("@gmail.com")  ? "" : "Invalid"} 
          />
          {console.log("email error", email)}
        </label>
        <br></br>
        <br></br>
        <label>
          Enter your Password:
          <br></br>
          <TextField
            variant="filled"
            placeholder="Your password"
            type="password"
            name="password"
            id="password"
           required
            minLength={5}
            value={password}
            error={password}
            helperText={password.length && password.length < 5 ? "Pls enter max 5 Character" : ""} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Enter your Confirm Password:
          <br></br>
          <TextField
            variant="filled"
            placeholder="Confirm password"
            type="password"
            name="password2"
            id="password2"
            required="This is required Field"
            minLength={5}
            value={password2}
             onChange={(e) => setPassword2(e.target.value)}
            error={password2}
             helperText={password && password !== password2 ? "Password not match" : ""} 
          />
        </label>
        <br></br>
        <br></br>
        <div>
          <div class="form-check d-flex justify-content-center mb-5">
            <input
              class="form-check-input me-2"
              type="checkbox"
              value=""
              id="form2Example3c"
            />
            <label class="form-check-label" for="form2Example3">
              I agree all statements
            </label>
          </div>

          <Button type="submit" class="btn btn-primary btn-block mb-4">
            Sign Up
          </Button>
          <div class="text-center text-lg-start mt-1 pt-2">
            <p class="small fw-bold mt-2 pt-1 mb-0">
              Alreadt have an account?{" "}
              <a href="/login" class="link-danger">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Registration;
=======
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { useFormik } from 'formik'
import axios from 'axios';


function Registration() {
    const [formValue, setformValue] = useState({
        name: "",
        email: "",
        password: "",
        password2:""
    })
    const handleChange = (event) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
        });
      }
      

    const handleSubmit = () => {
        const loginFormData = new FormData();
        loginFormData.append("name", formValue.name)
        loginFormData.append("email", formValue.email)
        loginFormData.append("password", formValue.password)
        loginFormData.append("password2", formValue.password2)
    
        axios.post('/api/register', 
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    
 
  const formik = useFormik({
    initialValues: {
    name: "",
    email: "",
    password: "",
    password2:""
    },
    onSubmit: values => {
        console.log(JSON.stringify(values, null, 2));
      },
    });
    return (
        <form onSubmit={handleSubmit} class="col d-flex justify-content-center">
            <div class="form-outline mb-4" >
                <label>Enter your Name:
                    <input
                        class="form-control"
                        placeholder='Your name'
                        type="text"
                        name='name'
                        id='name'
                        required="This is required Field"
                        minLength={5}
                        value={formValue.name}
                        onChange={handleChange}
                    />
                </label><br></br><br></br>
                <label>Enter your Emailid:
                    <input
                        class="form-control"
                        placeholder='Your Emailid'
                        type="email"
                        name='email'
                        required="This is required Field"
                        value={formValue.email}
                        onChange={handleChange}
                    />
                </label><br></br><br></br>
                <label>Enter your Password:
                    <input
                        class="form-control"
                        placeholder='Your password'
                        type="password"
                        name='password'
                        id='password'
                        required="This is required Field"
                        minLength={5}
                        value={formValue.password}
                        onChange={handleChange}
                    />
                </label><br></br><br></br>
                <label>Enter your Confirm Password:
                    <input
                        class="form-control"
                        placeholder='Confirm password'
                        type="password"
                        name='password2'
                        id='password2'
                        required="This is required Field"
                        minLength={5}
                        value={formValue.password2}
                        onChange={handleChange}
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
>>>>>>> 8aa3fc93dd178aa59850b7037cc70d2b76b7ccbe
