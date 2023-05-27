import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [first, setfirst] = useState(0);
  const checkStage1=()=>{
    console.log("Btn Profile clicked")
    if(localStorage.getItem("authtoken")){
      setfirst(1);
      setTimeout(() => {
        setfirst(0);
      }, 2000);
    }
    else{
      setfirst(3);
      setTimeout(() => {
        setfirst(0);
      }, 2000);
      navigate("/signup")
    }
  }
  const checkStage2=()=>{
    console.log("Btn SignUp clicked");
    if (localStorage.getItem("authtoken")) {
      setfirst(2);
      setTimeout(() => {
        setfirst(0);
      }, 2000);
    } else {
      navigate("/signup");
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Project
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link aria-current="page" to="/">
                  {/* Home */}
                </Link>
              </li>
              {/* <li className="nav-item">
              <Link to="/dashboard">
                Dashboard
              </Link>
            </li> */}
            </ul>
            <form className="d-flex">
              <button type="button" class="btn btn-warning" onClick={checkStage1}>
                Profile
              </button>

              <button type="button" class="btn btn-primary" onClick={checkStage2}>
                SignUp
              </button>
            </form>
          </div>
        </div>
      </nav>
      {first === 1 && (
        <div className="alert alert-success" role="alert">
          You are already Logged In!! Please Log Out First..
        </div>
      )}
      {first === 2 && (
        <div className="alert alert-danger" role="alert">
          You have not terminated your earlier session!!Please logout first...
        </div>
      )}
      {first === 3 && (
        <div className="alert alert-danger" role="alert">
          Please Sign Up First
        </div>
      )}
    </>
  );
};

export default Navbar;
