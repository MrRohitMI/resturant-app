import { useContext } from "react";
import { IMG_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { name, avgRating, costForTwo, cloudinaryImageId, cuisines } =
    props.resObj.info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="w-[170px] rounded bg-gray-200 hover:bg-gray-300 p-3">
      <img src={IMG_URL + cloudinaryImageId} alt="dish" className="w-100" />
      <div>{name}</div>
      <div className="cuisines">{cuisines.join(", ")}</div>
      <div>Rating : {avgRating}</div>
      <div>Price : {costForTwo}</div>
      <div>{loggedInUser}</div>
    </div>
  );
};

export const WithLabelcard = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-black text-white rounded m-2 p-2">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
