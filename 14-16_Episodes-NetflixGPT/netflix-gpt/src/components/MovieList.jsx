import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { setFalseGPTSeachView } from "../utils/gptSlice";

const MovieList = ({ title, movies }) => {

  const dispatch = useDispatch()
  const handleMovieCardClick = () => {
    dispatch(setFalseGPTSeachView())
  }
  if (!movies) return;
  return (
    <div className="px-6">
      <h1 className="mx:text-3xl text-lg py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies.map((movie) => (
            <Link key={movie.id} to={`/browse/${movie.id}`} onClick={handleMovieCardClick}>
              <MovieCard posterPath={movie.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
