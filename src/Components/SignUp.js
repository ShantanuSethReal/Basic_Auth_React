import React, { useEffect, useState } from "react";
// import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [alert, setalert] = useState(false);
  const [alert2, setalert2] = useState(false);
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.cpassword || credentials.name === "") {
      setalert2(true);
      setTimeout(() => {
        setalert2(false);
      }, 1500);
    } else {
      const userData = JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, cpassword: credentials.cpassword });
      //  console.log(userData)
      //  console.log(credentials)
      const token = "123456789abcdefg";
      localStorage.setItem("user", userData);
      localStorage.setItem("authtoken", token);
      setalert(true);
      setTimeout(() => {
        navigate("/profile");
        setalert(false);
      }, 1500);
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (localStorage.getItem("authtoken")) {
      navigate("/profile");
    } else {
      // alert("Please Sign Up on our portal")
    }
  }, []);

  return (
    <>
      <div>
        <div className="container my-2">
          <h2>Please Enter Your Detail</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input type="text" className="form-control" value={credentials.name} onChange={onChange} name="name" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Confirm Password
              </label>
              <input type="password" className="form-control" value={credentials.cpassword} onChange={onChange} name="cpassword" id="cpassword" />
            </div>
            {alert && (
              <div className="alert alert-success" role="alert">
                You have successfully created an account with us
              </div>
            )}
            {alert2 && (
              <div className="alert alert-danger" role="alert">
                Please Check if the password and confirm password match or name field is empty
              </div>
            )}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
