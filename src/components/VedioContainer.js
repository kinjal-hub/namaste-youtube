import { useEffect, useState } from "react";
import { YOUTUBE_VEDIO_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VedioContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVedioes();
  }, []);

  const getVedioes = async () => {
    const data = await fetch(YOUTUBE_VEDIO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    /* 
       grid-cols-1: 1 column for mobile 
       sm:grid-cols-2: 2 columns for tablets 
       lg:grid-cols-3: 3 columns for laptops
       xl:grid-cols-4: 4 columns for large screens
    */
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id} className="w-full">
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VedioContainer;
