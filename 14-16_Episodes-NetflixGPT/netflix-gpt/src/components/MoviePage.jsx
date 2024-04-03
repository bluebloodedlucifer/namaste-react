import { useParams } from "react-router-dom";
import useMovieData from "../hooks/useMovieData";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { BG_IMAGE_URL } from "../utils/constatants";
import MovieList from "./MovieList";

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

      <div className="relative w-full">
        <img
          className="h-screen object-cover w-screen"
          src={BG_IMAGE_URL}
          alt="background"
        />
        <div className="bg-black opacity-90 absolute top-0 w-full">
          <MovieList title={"Recently Watched"} movies={movieList} />
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
