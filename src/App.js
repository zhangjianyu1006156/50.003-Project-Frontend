import "./App.css";
import "./index.css";
import { Results } from "./Results";
import { Route, Routes, redirect } from "react-router-dom";
import { AuthProvider, useAuth } from "./Auth";
import { Glogin } from "./Glogin";

function App() {
  const auth = useAuth();
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          {!auth.profile ? (
            <Route path="/" element={<Glogin />} />
          ) : (
            <redirect to="./Results" />
          )}
          <Route path="/results" element={<Results />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
