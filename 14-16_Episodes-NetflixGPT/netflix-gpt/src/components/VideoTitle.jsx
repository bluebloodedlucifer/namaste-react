const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-[20%] md:px-24 px-6 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className="md:text-6xl text-2xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
        <div className="">
            <button className="bg-white text-black md:py-4 md:px-12 py-2 px-4 text-xl bg-opacity-60 rounded-lg hover:bg-opacity-80">▷ Play</button>
            <button className="bg-gray-700 text-white p-4 px-12 text-xl mx-2 bg-opacity-60 rounded-lg hover:bg-opacity-80  hidden md:inline-block ">ⓘ More Info</button>
        </div>
    </div>
  )
}
export default VideoTitle