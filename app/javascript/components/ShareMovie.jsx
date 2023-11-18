import React, { useState } from "react";

function ShareMovie() {
  const [url, setUrl] = useState("");

  return (
    <div className="bg-gray-100 p-8 rounded shadow-md w-80 container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Share YouTube URL</h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="youtubeUrl"
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
        >
          Share
        </button>
      </form>
    </div>
  );
}

export default ShareMovie;
