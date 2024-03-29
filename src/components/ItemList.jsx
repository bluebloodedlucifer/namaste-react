import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = (items) => {
    const listItems = items.items;

    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    return (
        <div>
            {listItems.map(item => (
                <div data-testid="foodItems" key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-400 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name} </span>
                            <span> - ₹ {item.card.info.defaultPrice/100 ? item.card.info.defaultPrice/100: item.card.info.price/100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="p-4 w-3/12">
                        <div className="absolute">
                            <button className="bg-white shadow-lg rounded-md px-2 border border-black" onClick={() => handleAddItem(item)}>Add +</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId}/>

                    </div>
                </div>))}
        </div>
    )
}

export default ItemList;