import { useContext } from "react";
import { IMG_URL, DUMMY_IMG } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { name, avgRating, costForTwo, cloudinaryImageId, cuisines } =
    props.resObj.info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div data-testid="resCard" className="rounded bg-gray-200 p-3 group hover:bg-gray-300 hover:shadow-md hover:-mt-1">
      <img src={IMG_URL + cloudinaryImageId} alt="dish" className="w-100"
        onError={(e) => {
          e.target.error = null
          e.target.src = DUMMY_IMG
        }}
      />
      <div className="font-bold text-xl group-hover:text-orange-400">{name}</div>
      <div className="cuisines font-bold">{cuisines.join(", ")}</div>
      <div className="font-bold text-gray-600">Rating : {avgRating}</div>
      <div className="group-hover:font-bold">Price : {costForTwo}</div>
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
