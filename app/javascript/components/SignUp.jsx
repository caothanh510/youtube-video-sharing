import React, { useState } from "react";

function SignUp() {
  return (
    <div className="bg-white p-8 rounded shadow-md w-80">
      <h2 className="text-2xl font-bold mb-6">SignUp</h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700"
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
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
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password_confirmation"
          >
            Confirm Password
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700"
            type="password_confirmation"
            id="password_confirmation"
            name="password_confirmation"
            placeholder="Enter your confirm password"
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
