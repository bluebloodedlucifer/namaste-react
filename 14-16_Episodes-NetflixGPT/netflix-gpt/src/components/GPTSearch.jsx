import { BG_IMAGE_URL } from "../utils/constatants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="h-screen object-cover 2xl:h-auto"
          src={BG_IMAGE_URL}
          alt="background"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};
export default GPTSearch;