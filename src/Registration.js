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