import Shimmer from "./shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";
import { useState } from "react";

const ResturantInfo = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  const handleCategory = (index) => {
    setShowIndex(index);
  };
  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
  // const { itemCards } =
  //   resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  const categories =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <>
      <div className="text-center">
        <h3 className="text-2xl">{name}</h3>
        <p className="font-bold">{cuisines.join(", ")}</p>
        <p className="text-gray-600">Price : {costForTwoMessage}</p>
        <h3>Menu</h3>
        <div>
          {categories.map((item, index) => (
            <ResturantCategory
              key={item?.card?.card?.categoryId ?? index}
              data={item?.card?.card}
              showCategory={index === showIndex ? true : false}
              handleClick={handleCategory}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ResturantInfo;
