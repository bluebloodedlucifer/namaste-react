
import { useSelector } from "react-redux"

import MovieList from "./MovieList"
import useTMDBGPTMovies from "../hooks/useTMDBGPTMovies"

const GPTMovieSuggestions = () => {
  const {movieNames, movieResults} = useSelector(store => store.gpt)

  useTMDBGPTMovies()
  
  return (
    <div className="p-4 m-4 bg-black opacity-90">
      <div>
        {movieNames && movieResults && movieNames.map((movie, index) => <MovieList key={movie} title={movie} movies={movieResults[index]}/>)}
      </div>
    </div>
  )
}
export default GPTMovieSuggestions