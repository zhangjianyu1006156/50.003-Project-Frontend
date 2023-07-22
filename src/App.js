import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { useAuthContext } from "./AuthContext/Auth";
import { RequireAuth } from "./AuthContext/RequireAuth";
import { Glogin } from "./Glogin";
import {Results} from "./pages/Results";
import {PackageInfo} from "./pages/PackageInfo";
import {Comparisons} from "./pages/Comparisons";

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
        <Route path="/packageinfo" element={            
            <RequireAuth>
              <PackageInfo />
            </RequireAuth>
          }
        />
        <Route path="/comparisons" element={            
            <RequireAuth>
              <Comparisons />
            </RequireAuth>
          }
        />
        
      </Routes>
    </div>
  );
}

export default App;
