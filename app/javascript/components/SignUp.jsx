import React, { useState, useEffect } from "react";
import Message from "./Message";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const {
    register,
    reset,
    message,
    isAuthenticated,
    axiosInstance,
    refreshPagerefreshCSRFToken,
  } = useAuth();

  useEffect(() => {
    refreshPagerefreshCSRFToken();
    reset();
  }, [isAuthenticated]);

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosInstance().post("/users", {
        user: {
          email,
          password,
          password_confirmation,
        },
      });
      register(response.data);

      if (response.data.status === "success") {
        setTimeout(() => {
          navigate("/users/sign_in");
        }, 2000);
      }
    } catch (error) {
      alert("Something when wrong. Please try again!");
    }
  };

  return (
    <>
      <div className="flex flex-row flex-auto justify-center m-8">
        <div className="bg-white p-8 rounded shadow-md basis-80 content-around">
          <h2 className="text-2xl font-bold mb-6">SignUp</h2>
          {message && <Message {...message} />}
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
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
                htmlFor="password"
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

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password_confirmation"
              >
                Confirm Password
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700"
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                placeholder="Enter your confirm password"
                value={password_confirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                required
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
              onClick={handleRegister}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
