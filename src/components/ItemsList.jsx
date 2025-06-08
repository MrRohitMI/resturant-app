import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem(item));
  };
  return (
    <>
      <div className="border-b-[1px] border-gray-600 flex items-center py-2">
        <div className="w-9/12 text-left">
          <div className="font-bold">
            Rs. {item.price / 100 || item.defaultPrice / 100}
          </div>
          <div className="text-sm text-gray-600">{item.description}</div>
        </div>
        <div className="w-3/12 relative">
          <button
            className="bg-black text-white rounded-2xl px-3 py-1 absolute top-0.5 left-4/12"
            onClick={() => handleAddItem(item)}
          >
            Add +
          </button>
          <img
            src={IMG_URL + item.imageId}
            alt="img"
            className="rounded-sm border-[1px] border-gray-400"
          />
        </div>
      </div>
    </>
  );
};
export default ItemsList;
