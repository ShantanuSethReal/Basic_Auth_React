// import logo from './logo.svg';
import "./App.css";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <BrowserRouter basename="/Contest_27May">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<SignUp />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
