import React from "react";

function VideoItem({ id, title, description, shared_by }) {
  return (
    <div className="bg-gray-100 p-4 rounded-md md:flex md:flex-row mb-4">
      <div className="basis-1/2">
        <iframe
          width="100%"
          height="350"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="basis-1/2">
        <div className="container mx-auto p-6 flex flex-col h-full justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <div className="text-sm text-gray-600">
              <p>Shared by: {shared_by}</p>
            </div>
          </div>
          {description && (
            <div>
              <p>Description:</p>
              <p className="text-clip text-ellipsis">
                {description.substring(0, 500)}{" "}
                {description.length >= 500 && "..."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
