import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import { Button } from "material-ui-core";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validationSchema: yup.object().shape({
    // email: yup.string().email().required("Email is rquired field"),
    // password: yup.string().required().min(5),
    // }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(email)
  // }
  return (
    <form
      onSubmit={formik.handleSubmit}
      class="col d-flex justify-content-center"
    >
      <div class="form-outline mb-4">
        Enter your Email id:
        <br></br>
        <label htmlFor="email">
          {/* <TextField id="outlined-basic" label="name" variant="outlined" /> */}
          <TextField
            variant="filled"
            type="email"
            name="email"
            id="email"
            placeholder="Email id"
            required="This is required Field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={email}
            helperText={
              email.length < 1 || email.endsWith("@gmail.com") ? "" : "Invalid"
            }
          />
          {/* {formik?.errors?.email} */}
        </label>{" "}
        <br></br>
        <br></br>
        <div class="form-outline mb-4">
          Enter your Password:
          <br></br>
          <label htmlFor="password">
            <TextField
              variant="filled"
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required="This is required Field"
              minLength={5}
              value={password}
              error={password}
              helperText={
                password.length && password.length < 5
                  ? "Pls enter max 5 Character"
                  : ""
              }
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* {formik?.errors?.password} */}
          </label>{" "}
          <br></br>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              unchecked
            />
            <label class="form-check-label"> Remember me </label>
          </div>
          <div class="col">
            <a href="/forgotpassword">Forgot password?</a>
          </div>
        </div>
        <br></br>
        <Button type="submit" class="btn btn-primary btn-block mb-2">
          Login
        </Button>
        <div class="text-center text-lg-start mt-1 pt-2">
          <p class="small fw-bold mt-2 pt-1 mb-0">
            Don't have an account?{" "}
            <a href="/registration" class="link-danger">
              Register
            </a>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Login;
