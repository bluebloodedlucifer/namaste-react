
import { useSelector } from "react-redux"
import { useMovieTrailer } from "../hooks/useMovieTrailer"


const VideoBackground = ({movieId}) => {

    const movieTrailerList = useSelector(store => store.movies?.movieTrailerList)
    
    useMovieTrailer(movieId);

    if(!movieTrailerList) return null

    const allTrailers = movieTrailerList[0]?.results?.filter(video => video?.type === "Trailer");



    return allTrailers?.length === 0 ? null : (
        <div className="">
            <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+allTrailers?.[0]?.key + "?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}
export default VideoBackground