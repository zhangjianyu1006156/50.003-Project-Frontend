import './App.css';
import "./index.css";
import GoogleLogin from './GoogleLogin';
import Results from "./pages/Results";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router-dom';

function App() {

  const[user, setUser]=useState(null);

  const ProtectedRoutes = () => {
    return user ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<GoogleLogin stateChanger={setUser} />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/results" element={<Results />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
