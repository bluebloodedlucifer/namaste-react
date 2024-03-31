import { useEffect } from "react";
import { YOUTUBE_MOST_POPULAR_VIDEOS_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideos } from "../utils/appSlice";

const usePopularVideos = () => {
  
  const dispatch = useDispatch();
  const popularVideos = useSelector(store => store.app.popularVideos)


  useEffect(() => {
    const getVideos = async () => {
      const data = await fetch(YOUTUBE_MOST_POPULAR_VIDEOS_URL);
      const json = await data.json();
      dispatch(addPopularVideos(json.items));
    };
    
    !popularVideos &&  getVideos();
  }, []);
};

export default usePopularVideos;
