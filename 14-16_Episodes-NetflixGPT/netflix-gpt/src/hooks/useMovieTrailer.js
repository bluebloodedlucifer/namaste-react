import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constatants"
import { useEffect } from "react"
import { addTrailerVideo } from "../utils/moviesSlice"

export const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()

    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json()
        // console.log(json)

        const allTrailers = json.results.filter(video => video.type === "Trailer");
        const trailer = allTrailers.length ? allTrailers[0]: json.results[0];
        // setTrailerKey(trailer.key);
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(()=>{
        getMovieVideos();
    }, [])
}

