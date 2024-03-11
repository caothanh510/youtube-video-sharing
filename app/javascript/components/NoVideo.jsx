import React from "react";

function NoVideo() {
  return (
    <div className="container mx-auto p-4 mt-20">
      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl font-semibold text-gray-500 mt-5">
            There is no video yet
          </p>
        </div>
      </div>
    </div>
  );
}

export default NoVideo;
