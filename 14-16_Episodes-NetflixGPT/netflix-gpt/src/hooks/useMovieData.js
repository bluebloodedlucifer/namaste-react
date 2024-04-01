import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constatants";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../utils/moviesSlice";

const useMovieData = (movieId) => {

    const movieList = useSelector(store => store.movies.movieList)

    const dispatch = useDispatch()
    
    useEffect(()=> {
        const getMovieData = async () => {

            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, API_OPTIONS)
            const json = await data.json()

            dispatch(addMovie(json))

        }
        !movieList.some(e => e.id == movieId) && getMovieData();
    }, [])
}

export default useMovieData;