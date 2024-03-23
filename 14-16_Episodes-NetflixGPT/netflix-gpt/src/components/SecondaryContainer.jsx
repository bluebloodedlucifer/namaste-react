import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  if(!movies) return;
  return (
    <div className="bg-black">
      <div className="relative z-20 -m-40 pl-40">
        <MovieList title = {"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title = {"Popular"} movies={movies.popularMovies}/>
        <MovieList title = {"Top Rated"} movies={movies.topRatedMovies}/>
        <MovieList title = {"Upcoming"} movies={movies.upcomingMovies}/>
      </div>
    </div>
  )
}
export default SecondaryContainer