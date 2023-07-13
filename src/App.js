import "./App.css";
import "./index.css";
import { Results } from "./Results";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useAuthContext } from "./Auth";
import { RequireAuth } from "./RequireAuth";
import { Glogin } from "./Glogin";

function App() {
  const { user } = useAuthContext();
  console.log(user);
  //const location = useLocation();
  //const pathName = location.state?.from || "/"; //in this scenario the state if location.state is true is /results
  return (
    <div className="App">
      <Routes>
        <Route
          path="/results"
          element={
            <RequireAuth>
              <Results />
            </RequireAuth>
          }
        />
        <Route path="/" element={<Glogin />} />
      </Routes>
    </div>
  );
}

export default App;
