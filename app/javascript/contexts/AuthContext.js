import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  headers: {},
  message: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "logged_in":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: action.payload ? true : false,
      };
    case "login":
      return {
        ...state,
        user: action.payload.data,
        isAuthenticated: action.payload.status === "success",
        message: action.payload,
      };
    case "register":
      return {
        ...state,
        message: action.payload,
      };
    case "logout":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        message: action.payload,
      };
    case "message":
      return { ...state, message: action.payload };
    case "refreshCSRFToken":
      return {
        ...state,
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": action.payload,
        },
      };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, message, headers }, dispatch] = useReducer(
    reducer,
    initialState
  );

  refreshPagerefreshCSRFToken = async () => {
    try {
      const response = await axiosInstance().get("/refresh_csrf");
      dispatch({ type: "refreshCSRFToken", payload: response.data.csrf_token });
    } catch (error) {
      console.log("error", error);
    }
  };

  function login(data) {
    dispatch({ type: "login", payload: data });
  }

  function logged_in(data) {
    dispatch({ type: "logged_in", payload: data });
  }

  function register(data) {
    dispatch({ type: "register", payload: data });
  }

  function logout(data) {
    dispatch({ type: "logout" }, { payload: data });
    let app = document.querySelector("#app");
    app.setAttribute("data-user", "");
  }

  function reset() {
    dispatch({ type: "message", payload: "" });
  }

  function axiosInstance() {
    let payload = axios.create({
      baseURL: window.location.origin, // Your API base URL
      headers: headers,
    });

    return payload;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        logged_in,
        login,
        logout,
        message,
        axiosInstance,
        register,
        refreshPagerefreshCSRFToken,
        reset,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
