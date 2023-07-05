import { createContext,useContext, useState,useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider =({children}) =>{
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);


    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log("Login Failed:", error),
    })

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

    const logOut = () => {
        googleLogout();
        setProfile(null);
    }


    return (
        <AuthProvider.Provider value = {{user, profile,login,logOut}}>
            {children}
        </AuthProvider.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}

