import { useDispatch, useSelector } from "react-redux"
import { addTMDBMovies } from "../utils/gptSlice"
import { API_OPTIONS } from "../utils/constatants"
import { useEffect } from "react"

const useTMDBGPTMovies = () => {
    const {movieNames} = useSelector(store => store.gpt)
    const dispatch = useDispatch()
    
    useEffect(() => {
      tmdbMovieResults()
    }, [movieNames])

    const searchTMDBMovies = async(movie) => {
      const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
      const json = await data.json();
      return json.results;
    }
  
    const tmdbMovieResults = async() => {
      if(!movieNames) return null
  
      const promistArray = movieNames.map(movie => searchTMDBMovies(movie));
      const tmdbResults = await Promise.all(promistArray);
      dispatch(addTMDBMovies(tmdbResults))
    }
  
  
}

export default useTMDBGPTMovies;