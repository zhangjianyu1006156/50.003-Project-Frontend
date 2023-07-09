import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [profile, setProfile] = useState("");
  const navigate = useNavigate();
  let signedin = false;

  const login = (user) => {
    setUser(user);
    console.log(user);
    signedin = true;
    console.log(signedin);
  };

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  useEffect(() => {
    if (profile) {
      console.log(profile);
    }
  });

  const logOut = () => {
    setUser(null);
    setProfile(null);
    navigate("/");
    signedin = false;
  };

  return (
    <AuthContext.Provider value={{ signedin, user, profile, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
