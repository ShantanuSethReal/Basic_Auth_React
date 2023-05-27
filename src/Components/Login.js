import React, { useState } from 'react'

const Login = () => {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const handleSubmit = () => {};
    const onChange = () => {};

  return (
    <div>
      <div className="container my-2">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <h3>Email address</h3>
            </label>
            <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <h3>Password</h3>
            </label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login
