import { useSelector } from "react-redux";
import usePopularVideos from "../hooks/usePopularVideos"
import VideoCard from "./VideoCard"


const VideoContainer = () => {
  const popularVideos = useSelector(store => store.app.popularVideos)
  console.log(popularVideos)

  usePopularVideos();

  return (
    <div>
      
        <VideoCard/>
    </div>
  )
}
export default VideoContainer