import React from 'react'
import Login from './component/Login.jsx'
import Signup from './component/Signup.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './component/Home.jsx';
import Profile from "./component/Profile.jsx"
import ProtectedRoute from './protected/ProtectedRoute.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/signup" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path='/profile' element={<ProtectedRoute><Profile /> </ProtectedRoute>} />
        </Routes>

      </Router>

    </>
  )
}

export default App