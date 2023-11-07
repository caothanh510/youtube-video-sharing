import React, { useState } from "react";
import Navbars from "./Navbars";
import ShareMovie from "./ShareMovie";
import ListVideo from "./ListVideo";
import Login from "./Login";

function App() {
  return (
    <div>
      <Navbars />
      <ShareMovie />
      <Login />
      <ListVideo />
    </div>
  );
}

export default App;
