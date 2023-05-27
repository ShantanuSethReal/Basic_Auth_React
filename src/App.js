// import logo from './logo.svg';
import './App.css';
import SignUp from "./Components/SignUp"
import Login from "./Components/Login"
import Profile from './Components/Profile';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
