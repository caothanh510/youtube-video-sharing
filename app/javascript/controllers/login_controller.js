import { Controller } from "@hotwired/stimulus";
import React from "react";
import { createRoot } from "react-dom/client";
import Login from "../components/Login";

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("React controller connected");
    const login = document.getElementById("login");
    createRoot(login).render(<Login />);
  }
}
