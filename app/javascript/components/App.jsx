import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import { NotificationProvider } from "../contexts/NotificationContext";
import ListVideo from "./ListVideo";
import Login from "./Login";
import SignUp from "./SignUp";
import Navbars from "./Navbars";
import ShareMovie from "./ShareMovie";
import Notification from "./Notification";

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <BrowserRouter>
          <Notification />
          <Navbars />
          <Routes>
            <Route path="/" element={<ListVideo />} />
            <Route path="/users/sign_in" element={<Login />} />
            <Route path="/users/sign_up" element={<SignUp />} />
            <Route path="/share" element={<ShareMovie />} />
          </Routes>
        </BrowserRouter>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
