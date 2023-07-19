import { Navigate } from "react-router-dom";
import { useAuthContext } from "../AuthContext/Auth";

function RequireAuth({ children }) {
  //const location = useLocation(); //uselocation() returns the location of the URL, location object includes; pathname, state search
  const { user } = useAuthContext();
  console.log(user);
  if (!user) {
    //if auth.user = null then !auth.user = true and will navigaet back to "/"
    return <Navigate to="/" />;
  }
  return children;
}
export { RequireAuth };
