import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, avgRating, costForTwo,cloudinaryImageId,cuisines } = props.resObj.info;
  return (
    <div className="w-[170px] rounded bg-gray-200 hover:bg-gray-300 p-3">
      <img src={IMG_URL + cloudinaryImageId} alt="dish" className="w-100"/>
      <div>{name}</div>
      <div className="cuisines">{cuisines.join(", ")}</div>
      <div>Rating : {avgRating}</div>
      <div>Price : {costForTwo}</div>
    </div>
  );
};

export default RestaurantCard;
