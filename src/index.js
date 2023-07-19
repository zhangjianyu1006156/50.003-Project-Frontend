import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
<<<<<<< HEAD
// @material-tailwind/react
import { ThemeProvider } from "@material-tailwind/react";
=======
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./Auth";
>>>>>>> temporary

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="312768833119-idhbsfq3k09r3dden70r2k8p9521f829.apps.googleusercontent.com">
<<<<<<< HEAD
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
=======
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
    {/* </React.StrictMode> */}
>>>>>>> temporary
  </GoogleOAuthProvider>
);