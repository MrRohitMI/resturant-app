import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemsList = ({ item, page }) => {
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = () => {
    dispatch(removeItem(item))
  } 
  return (
    <>
      <div className="border-b-[1px] border-gray-600 flex items-center py-2" data-testid="allFoodItems">
        <div className="w-9/12 text-left">
          <div className="font-bold">
            Rs. {item.price / 100 || item.defaultPrice / 100}
          </div>
          <div className="text-sm text-gray-600 mb-1">{item.description}</div>
          {page == "cart" ?
            <div><button className="bg-gray-300 rounded border-[1px] border-gray-500 px-2" onClick={() => { handleAddItem(item) }}>+</button>
              <button className="bg-gray-300 rounded border-[1px] border-gray-500 px-2">{item.quantity}</button>
              <button className="bg-gray-300 rounded border-[1px] border-gray-500 px-2" onClick={()=> handleRemoveItem(item)}>-</button></div> : ""}
        </div>
        <div className="w-1/2 sm:w-4/12 lg:w-3/12 relative">
          {page == "menu" ?
            <button
              className="bg-black text-white rounded-2xl px-3 py-1 absolute top-0.5 left-1/2 -translate-x-1/2"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button> : ""}
          <img
            src={IMG_URL + item.imageId}
            alt="img"
            className="rounded-sm h-24 sm:h-28 lg:h-auto w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};
export default ItemsList;
