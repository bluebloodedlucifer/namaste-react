import { IMG_CDN } from "../utils/constatants"

const MovieCard = ({posterPath}) => {
  if(!posterPath) return
  return (
    <div className="md:w-48 w-36 pr-4">
      <img src={IMG_CDN + posterPath} alt="Movie Card" />

    </div>
  )
}
export default MovieCard