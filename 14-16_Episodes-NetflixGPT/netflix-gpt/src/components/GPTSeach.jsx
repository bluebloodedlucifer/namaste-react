import { BG_IMAGE_URL } from "../utils/constatants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSeach = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BG_IMAGE_URL}
          alt="background"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};
export default GPTSeach;
