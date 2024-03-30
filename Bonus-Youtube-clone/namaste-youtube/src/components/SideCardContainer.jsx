import SideCard from "./SideCard"

const SideCardContainer = ({title, subTitles}) => {
  return (
    <div className="">
        <h1 className= {`font-bold ${title !== "Home" ? "pt-5" : ""}`}>{title}</h1>
        {subTitles.map(subtitle => <SideCard key={subtitle} subtitle={subtitle} />)}
    </div>
  )
}
export default SideCardContainer