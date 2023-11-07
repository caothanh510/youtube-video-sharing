import React, { useState } from "react";

export default function Navbars() {
  return (
    <>
      <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <a href="https://www.youtube.com/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Circle-icons-video.svg/1024px-Circle-icons-video.svg.png"
                  alt="YouTube Logo"
                  width="50"
                />
              </a>
            </div>
            <div class="hidden md:block">
              <a class="text-gray-300 hover:text-white px-3 py-2" href="#">
                Login
              </a>
              <a class="text-gray-300 hover:text-white px-3 py-2" href="#">
                Sign Up
              </a>
            </div>
            <div class="md:hidden">
              <button class="text-gray-300 hover:text-white focus:outline-none focus:text-white">
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="md:hidden hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a class="text-gray-300 hover:text-white block px-3 py-2" href="#">
              Home
            </a>
            <a class="text-gray-300 hover:text-white block px-3 py-2" href="#">
              About
            </a>
            <a class="text-gray-300 hover:text-white block px-3 py-2" href="#">
              Services
            </a>
            <a class="text-gray-300 hover:text-white block px-3 py-2" href="#">
              Contact
            </a>
            <a class="text-gray-300 hover:text-white block px-3 py-2" href="#">
              Login
            </a>
            <a class="text-gray-300 hover:text-white block px-3 py-2" href="#">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
