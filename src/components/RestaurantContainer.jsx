import RestaurantCard, {withOfferLabel} from "./RestaurantCard"
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/Usercontext";

// import resList from "../utils/mockData";

const RestaurantContainer = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredResaurants, setFilteredResaurants] = useState([]);
    // const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    const RestaurantCardWithOffer = withOfferLabel(RestaurantCard);

    const [searchText, setSerachText] = useState("");

    const {setUserName, loggedInUser} = useContext(UserContext);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

        const jsonData = await data.json();
        // console.log(jsonData)
        const resListAPI = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // console.log(jsonData.data.cards)
        setListOfRestaurants(resListAPI)
        setFilteredResaurants(resListAPI)
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Looks like you are offline! Please check your internet connection</h1>


    return listOfRestaurants.length === 0 ? (
        <Shimmer/>
    ):(
        <div>
            <div className="flex items-center justify-between">
                <div className="p-4 m-4 ">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                        setSerachText(e.target.value);
                    }}/>
                    <button className = "px-4 py-1 bg-green-100 m-4" onClick={()=>{
                        const searchedRestaureants = listOfRestaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredResaurants(searchedRestaureants);
                    }}>Search</button>
                </div>
                <div>
                    <button className="px-4 py-1 bg-green-300" onClick={() => {
                        const filteredListOfRestaurants = listOfRestaurants.filter(restaurant => restaurant.info.avgRating >= 4.5)
                        setFilteredResaurants(filteredListOfRestaurants);
                    }}>Top Rated Resaurants</button>
                </div>
                <div>
                    <input type = "text" className="border border-solid border-black p-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredResaurants.map(restaurant => <Link to={"/restaurants/" + restaurant.info.id} key = {restaurant.info.id}>
                        {restaurant.info?.aggregatedDiscountInfoV3 !== undefined ? (
                        <RestaurantCardWithOffer resData = {restaurant}/>) : (
                        <RestaurantCard resData = {restaurant} />)}
                        </Link>)
                }
            </div>
        </div>
    )
}

export default RestaurantContainer;

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING