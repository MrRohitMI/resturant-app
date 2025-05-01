import RestaurantCard from "./ResturantCard";
import resList from "../utils/resList";
const Body = () => {
  return (
    <div className="body">
      <input placeholder="Search..." className="search" />
      <div className="res-container">
        {resList.map((resturant, index) => (
          <RestaurantCard key={index} resObj={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
