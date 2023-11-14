import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { AuthProvider } from "../contexts/AuthContext";
import Homepage from "./Homepage";
import Login from "./Login";
import SignUp from "./SignUp";
import Navbars from "./Navbars";
import ShareMovie from "./ShareMovie";

function App() {
  useEffect(() => {}, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/users/sign_in" element={<Login />} />
          <Route path="/users/sign_up" element={<SignUp />} />
          <Route path="/share" element={<ShareMovie />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
