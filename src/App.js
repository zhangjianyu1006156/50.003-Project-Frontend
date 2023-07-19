import "./App.css";
import "./index.css";
import { Results } from "./pages/Results";
import { Route, Routes } from "react-router-dom";
import { useAuthContext } from "./AuthContext/Auth";
import { RequireAuth } from "./AuthContext/RequireAuth";
import { Glogin } from "./Glogin";
import PackageInfo from "./pages/PackageInfo";

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
        <Route path="/packageinfo" element={<PackageInfo />} />
      </Routes>
    </div>
  );
}

export default App;
