import Shimmer from "./shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

const ResturantInfo = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);
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
          {categories.map((item) => (
            <ResturantCategory
              key={item?.card?.card?.categoryId}
              data={item?.card?.card}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ResturantInfo;
