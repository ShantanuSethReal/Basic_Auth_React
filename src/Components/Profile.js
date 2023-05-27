import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("authtoken");
    localStorage.removeItem("user");
    navigate("/");
  };
  const [cred, setCred] = useState({});
  useEffect(() => {
    if(localStorage.getItem("authtoken")){
const credentials = JSON.parse(localStorage.getItem("user"));
setloggedIn(true);
setCred(credentials);
    }
    else{
      setloggedIn(false);
      // alert('Please Sign Up on our portal')
      // navigate("/signup")
    }
    
  }, []);
const [loggedIn, setloggedIn] = useState(true);
const handleSignUp=()=>{
  navigate("/")
}
  return (
    <>
      <div className="container">
        <h1>Profile:</h1>
        {loggedIn && localStorage.getItem("authtoken") && <h3>User Logged In ...!! Please Log Out To Continue</h3>}
        {!loggedIn && !localStorage.getItem("authtoken") && <div><span style={{fontSize: "30px",color: "red"}}>  Sign Up To Continue  </span>
         <button type="button" className="btn btn-secondary" onClick={handleSignUp}>
            SignUp
          </button>
          </div>}
        <div className="row">
          <div className="col-6">
            <h2>Full Name:</h2>
            <h2>Email:</h2>
            <h2>Password</h2>
          </div>
          <div className="col-6">
            {localStorage.getItem("authtoken") && <h2>{cred.name}</h2>}
            {localStorage.getItem("authtoken") && <h2>{cred.email}</h2>}
            {localStorage.getItem("authtoken") && <h2>{cred.password}</h2>}
          </div>

          <button type="button" className="btn btn-secondary" onClick={handleLogOut}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
