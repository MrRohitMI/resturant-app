import { useEffect, useState } from "react";
import Shimmer from "./shimmer/Shimmer";
import { useParams } from "react-router-dom";

const ResturantInfo = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=${resId}`
    );
    const json = await data.json();
    setResInfo(json.data);
  };
  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  return (
    <>
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>Price : {costForTwoMessage}</p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs. {item.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ResturantInfo;
