import { useEffect, useState } from "react";
import Shimmer from "./shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";

const ResturantInfo = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);
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
