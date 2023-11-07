import React, { useState } from "react";

function VideoItem() {
  return (
    <div className="bg-gray-100 p-4 rounded-md md:flex md:flex-row mb-4">
      <div className="basis-1/2">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/v5FB_jFbjmY?si=p3w5Ac60uTbMqPz_"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="basis-1/2">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">
            Introduction to Tailwind CSS
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            In this video, we'll explore the basics of Tailwind CSS and how to
            use it to create beautiful and responsive designs for your web
            applications. We'll cover the utility-first approach, the core
            concepts of Tailwind CSS, and some practical examples to get you
            started.
          </p>
          <div className="text-sm text-gray-600">
            <p>Published on November 6, 2023</p>
            <p>Duration: 12:34</p>
            <p>Author: Your Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
