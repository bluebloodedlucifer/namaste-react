import { useParams } from "react-router-dom";
import useMovieData from "../hooks/useMovieData";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import GPTSearch from "./GPTSearch";

const MoviePage = () => {
  const movieList = useSelector((store) => store.movies.movieList);
  const gpt = useSelector((store) => store.gpt.showGPTSearch);
  const { movieId } = useParams();
  useMovieData(movieId);

  let movie = movieList.filter((e) => e.id == movieId);

  if (movie.length == 0) return null;
  // console.log(movie)
  const { original_title, overview } = movie[0];

  return (
    <>
      {gpt ? (
        <GPTSearch />
      ) : (
        <div className="md:pt-0 pt-[35%] bg-black">
          <VideoTitle title={original_title} overview={overview} />
          <VideoBackground movieId={movieId} />
        </div>
      )}
    </>
  );
};

export default MoviePage;
