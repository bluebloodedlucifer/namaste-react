import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import RestaurantCategory from "./ItemCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams()
    const resInfo = useRestaurantInfo(resId);

    const [showIndex, setShowIndex] = useState(0);

    if(resInfo === null) {
        return (
            <Shimmer/>
        )
    }

    const {name, cuisines, costForTwo} = resInfo?.data?.cards[0]?.card?.card?.info

    const {cards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR

    const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c => c.card.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories)

    cards.splice(0, 2);

    return(
        <div className="text-center">
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <h3 className="font-bold">{cuisines.join(", ")}</h3>
            <h3>{costForTwo/100 + " for Two"}</h3>
            <h2>Menu</h2>
            {/* catorgory Accordian */}
            {/* <div className="flex-row content-center"> */}
                {categories.map((category, index) => (
                    <RestaurantCategory 
                        key = {category?.card?.card?.title} 
                        data = {category?.card?.card} 
                        showItems={index === showIndex && true}
                        setShowIndex = {() => setShowIndex(index)}
                    />
                ))}
            {/* </div> */}
        </div>
    )
}

export default RestaurantMenu;