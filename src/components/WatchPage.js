import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col w-full p-2 md:p-5">
      {/* Top Section: Video & Live Chat */}
      <div className="flex flex-col lg:flex-row w-full gap-4">
        
        {/* Video Wrapper */}
        <div className="w-full lg:flex-[3]"> 
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Live Chat - Hidden on mobile or stacked below video */}
        <div className="w-full lg:flex-[1]">
          <LiveChat />
        </div>
      </div>

      {/* Bottom Section: Comments */}
      <div className="w-full lg:max-w-[75%]">
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
