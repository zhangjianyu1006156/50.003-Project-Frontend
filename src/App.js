import './App.css';
import "./index.css";
import { Login } from "./Login";
import GoogleLogin from './GoogleLogin';
import Results from "./Results";
import ProtectedRoutes from "./ProtectedRoutes";
import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<GoogleLogin />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/results" element={<Results />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
