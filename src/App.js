import './App.css';
import "./index.css";
import {Results} from "./Results";
import { Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './Auth';
import { Glogin } from './Glogin';

function App() {
  const auth = useAuth();

  return (
    <AuthProvider>
        <Routes>
            <Route path="/" element={<Glogin/>} />
            <Route path={"/results"} element={<Results />} />
          </Routes>
    </AuthProvider>
  );
}

export default App;
