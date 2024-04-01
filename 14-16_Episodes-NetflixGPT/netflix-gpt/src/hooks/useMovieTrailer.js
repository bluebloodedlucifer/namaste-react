import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constatants"
import { useEffect } from "react"
import { addMovieTrailer, addTrailerVideo } from "../utils/moviesSlice"

export const useMovieTrailer = (movieId) => {
    const movieTrailerList = useSelector(store => store.movies?.movieTrailerList)
    const dispatch = useDispatch()
    // const {trailerVideo} = useSelector(store => store.movies);

    
    useEffect(()=>{
        const getMovieVideos = async () => {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
            const json = await data.json()
            dispatch(addMovieTrailer(json))
            
        }
        !movieTrailerList.some(e => e.id == movieId) && getMovieVideos();
    }, [])
}

