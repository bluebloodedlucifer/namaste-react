import { useParams } from "react-router-dom";
import useMovieData from "../hooks/useMovieData";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";


const MoviePage = () => {
  const movieList = useSelector((store) => store.movies.movieList);

  const { movieId } = useParams();

  useMovieData(movieId);
  if (!movieId) return null;

  if (!movieList || movieList.length === 0) return null;

  let movie = movieList.filter((e) => e.id == movieId);

  if (!movie || movie.length === 0) return null;

  const { original_title, overview } = movie[0];

  return (
    <div className="md:pt-0 pt-[35%] bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={movieId} />
    </div>
  );
};

export default MoviePage;
