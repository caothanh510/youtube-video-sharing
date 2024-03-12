import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useNotification } from "../contexts/NotificationContext";
import { useAuth } from "../contexts/AuthContext";
import VideoItem from "./VideoItem";
import NoVideo from "./NoVideo";

import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

function ListVideo() {
  const { axiosInstance } = useAuth();
  const { notification } = useNotification();
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagy, setPagy] = useState({});

  useEffect(() => {
    getVideo();
  }, [notification, currentPage]);

  const getVideo = async () => {
    try {
      const response = await axiosInstance().get("/shares", {
        params: {
          page: currentPage + 1,
        },
      });
      setVideos(response.data.data.records);
      setPagy(response.data.data.pagy);
    } catch (error) {
      alert("Something when wrong. Please try again!");
    }
  };

  if (videos.length === 0) {
    return <NoVideo />;
  }

  return (
    <div className="container mx-auto p-4 mt-20">
      {videos.map((video) => {
        return (
          <VideoItem
            key={video.id}
            url={video.url}
            {...video.additional_data}
          />
        );
      })}

      <ReactPaginate
        containerClassName={
          "pagination flex items-center justify-center w-full"
        }
        pageClassName={"page-item m-5"}
        activeClassName={
          "rounded-full relative z-10 inline-flex items-center bg-sky-500 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        }
        onPageChange={(event) => setCurrentPage(event.selected)}
        pageCount={Math.ceil(pagy.count / pagy.items)}
        breakLabel="..."
        previousLabel={
          <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
            <AiFillLeftCircle />
          </IconContext.Provider>
        }
        nextLabel={
          <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
            <AiFillRightCircle />
          </IconContext.Provider>
        }
      />
    </div>
  );
}

export default ListVideo;
