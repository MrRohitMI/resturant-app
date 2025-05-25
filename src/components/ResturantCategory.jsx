import { useState } from "react";
import ItemsList from "./ItemsList";

const ResturantCategory = ({ data }) => {
  const [showCategory, setShowCategory] = useState(true);
  return (
    <>
      <div className="bg-gray-300 mx-auto my-3 w-6/12 p-2 shadow">
        <div
          className="flex justify-between items-center"
          onClick={() => {
            setShowCategory(!showCategory);
          }}
        >
          <div className="font-bold">
            {data.title}({data.itemCards.length})
          </div>
          <div className="font-bold text-blue-950 px-2 py-1 border hover:bg-blue-950 hover:text-white rounded-sm">
            {showCategory ? "-" : "+"}
          </div>
        </div>
        {showCategory && (
          <div>
            {data.itemCards.map((item) => (
              <ItemsList key={item?.card?.info?.id} item={item?.card?.info} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default ResturantCategory;
