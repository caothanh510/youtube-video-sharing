import React, { useState } from "react";

import VideoItem from "./VideoItem";

function ListVideo() {
  return (
    <div className="container mx-auto p-4">
      <VideoItem />
      <VideoItem />
      <VideoItem />
    </div>
  );
}

export default ListVideo;
