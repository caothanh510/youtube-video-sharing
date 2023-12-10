import React, { useState, useEffect } from "react";
import Message from "./Message";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    login,
    reset,
    message,
    isAuthenticated,
    refreshPagerefreshCSRFToken,
    axiosInstance,
  } = useAuth();

  useEffect(() => {
    reset();
    if (isAuthenticated) {
      navigate("/");
    }
    refreshPagerefreshCSRFToken();
  }, [isAuthenticated]);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosInstance().post("/users/sign_in", {
        user: {
          email,
          password,
        },
      });
      login(response.data);
    } catch (error) {
      alert("Something when wrong. Please try again!");
    }
  };

  return (
    <>
      <div className="flex flex-row flex-auto justify-center m-8">
        <div className="bg-white p-8 rounded shadow-md basis-80 content-around">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          {message && <Message {...message} />}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700"
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
              onClick={handleLogin}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
