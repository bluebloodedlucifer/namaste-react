import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props
    // console.log(resData)
    const {name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId} = resData
    return (
        <div className="m-4 p-2 w-52 rounded-lg bg-gray-100 hover:bg-gray-200" data-testid = "resCard">
            <img className="rounded-xl" src={CDN_URL+cloudinaryImageId}></img>
            <h3 className="font-bold text-xl">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

// Higher Order Component

// input -> <RestaurantCard>
// ouput -> <RestaurnatCardPromoted>

export const withDiscountedLabel = (RestaurantCard) => {
    return (props) => {

        // const {header} = props?.resData?.info?.aggregatedDiscountInfoV3?.header
        return (
            <div>
                {/* {console.log(header)} */}
                {/* <label>{header}</label> */}
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Discounted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;