import React, { useState } from "react";
import Message from "./Message";
import { useAuth } from "../contexts/AuthContext";

function ShareMovie() {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState({});
  const { axiosInstance, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    window.location.href = "/users/sign_in";
  }

  const handleShare = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosInstance().post("/shares", {
        share: {
          url,
        },
      });
      setMessage(response.data);
      resetForm();
    } catch (error) {
      alert("Something when wrong. Please try again!");
    }
  };

  const resetForm = () => {
    setTimeout(() => {
      setUrl("");
      setMessage({});
    }, 2000);
  };

  return (
    <div className="bg-gray-100 p-8 rounded shadow-md w-[500px] container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Share YouTube URL</h2>
      {message && <Message {...message} />}
      <form onSubmit={handleShare}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="youtubeUrl"
          >
            YouTube URL
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700"
            type="text"
            id="youtubeUrl"
            name="youtubeUrl"
            placeholder="Enter the YouTube URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={handleShare}
        >
          Share
        </button>
      </form>
    </div>
  );
}

export default ShareMovie;
