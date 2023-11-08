import React, { useState } from "react";
import Navbars from "./Navbars";
import ListVideo from "./ListVideo";

function Homepage() {
  return (
    <div>
      <Navbars />
      <ListVideo />
    </div>
  );
}

export default Homepage;