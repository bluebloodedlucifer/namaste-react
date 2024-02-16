
import ItemList from "./ItemList";

const ItemCategory = ({data, showItems, setShowIndex}) => {

    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowIndex()
    }
    return (
        <div>
            {/* Header */}
            <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-medium">{data.title} ({data.itemCards.length})</span>
                    <span>{"⬇️"}</span>
                </div>
                {showItems && <ItemList items = {data.itemCards}/>}
            </div>
            {/* Accordian Body */}
        </div>
    )
}

export default ItemCategory;