import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbars() {
  const { logged_in, logout, isAuthenticated, user, axiosInstance } = useAuth();

  useEffect(() => {
    handleAuthorization();
  }, []);

  useEffect(() => {
    refreshPagerefreshCSRFToken();
  }, [isAuthenticated]);

  const handleAuthorization = async () => {
    let app = document.querySelector("#app");
    let user = app.getAttribute("data-user");
    logged_in(user);
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosInstance().delete("/users/sign_out");

      if (response.status == 200) {
        logout(response.data);
      }
    } catch (error) {
      alert("Something when wrong. Please try again!");
    }
  };

  return (
    <>
      <nav className="bg-gray-800 mb-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-auto">
            <div className="flex items-center p-2">
              <a href="/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Circle-icons-video.svg/1024px-Circle-icons-video.svg.png"
                  alt="YouTube Logo"
                  width="50"
                />
              </a>
            </div>
            <div className="flex md:flex-row flex-col align-center items-center space-x-4 p-2">
              {isAuthenticated ? (
                <>
                  <p className="text-gray-300">Welcome {user}</p>
                  <NavLink
                    className="rounded bg-sky-500/100 text-white py-1 px-2 "
                    to="/share"
                  >
                    Share a movie
                  </NavLink>
                  <NavLink
                    className="text-gray-300 hover:text-white px-3 py-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/users/sign_in"
                    className="text-gray-300 hover:text-white px-3 py-2"
                  >
                    Login
                  </NavLink>

                  <NavLink
                    to="/users/sign_up"
                    className="text-gray-300 hover:text-white px-3 py-2"
                  >
                    SignUp
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
