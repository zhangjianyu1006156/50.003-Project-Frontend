import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
const { AuthProvider } = require("./AuthContext/Auth");

ReactDOM.render(
  <GoogleOAuthProvider clientId="312768833119-idhbsfq3k09r3dden70r2k8p9521f829.apps.googleusercontent.com">
    {/* <React.StrictMode> */}
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
    {/* </React.StrictMode> */}
  </GoogleOAuthProvider>
);
