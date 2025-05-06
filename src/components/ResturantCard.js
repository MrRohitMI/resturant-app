import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, avgRating, costForTwo,cloudinaryImageId,cuisines } = props.resObj.info;
  return (
    <div className="res-card">
      <img src={IMG_URL + cloudinaryImageId} alt="dish" />
      <div>{name}</div>
      <div className="cuisines">{cuisines.join(", ")}</div>
      <div>Rating : {avgRating}</div>
      <div>Price : {costForTwo}</div>
    </div>
  );
};

export default RestaurantCard;
