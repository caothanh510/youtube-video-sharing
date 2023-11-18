import { Controller } from "@hotwired/stimulus";
import React from "react";
import { createRoot } from "react-dom/client";
import SignUp from "../components/SignUp";

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("React controller connected");
    const sign_up = document.getElementById("sign_up");
    createRoot(sign_up).render(<SignUp />);
  }
}
