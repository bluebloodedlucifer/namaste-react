import { useDispatch, useSelector } from "react-redux"
import { lang } from "../utils/languageConstants"
import { useRef } from "react"
import gemini from "../utils/gemini"
import { addGPTMovies } from "../utils/gptSlice"

const GPTSearchBar = () => {
    const langKey = useSelector(store => store.config.lang)
    const searchText = useRef()
    const dispatch = useDispatch()

    const handleGPTSearchClick = async() => {
      const prompt = "Act as a movie recommendation system for the " + searchText.current.value + " movies. Return 5 Movies, comma seperated and don't make them numbered"

      const result = await gemini.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      dispatch(addGPTMovies(text.split(",")))
    }
  return (
    <div className="xl:pt-[10%] md:pt-[30%] pt-[50%] flex justify-center">
        <form className="md:w-1/2 w-full bg-black grid grid-cols-12 " onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type="text" className="md:p-4 p-2 md:m-4 m-2 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className="md:py-2 py-1 md:px-4 px-2  md:m-4 m-2 bg-red-700 text-white rounded-lg col-span-3" onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}
export default GPTSearchBar