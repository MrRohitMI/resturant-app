import { LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resName, rating, price } = props.resObj;
  return (
    <div className="res-card">
      <img src={LOGO_URL} alt="dish" />
      <div>{resName}</div>
      <div>Rating : {rating}</div>
      <div>Price : {price}Rs</div>
    </div>
  );
};

export default RestaurantCard;
