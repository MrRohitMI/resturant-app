import { useState, useEffect } from "react";
import RestaurantCard from "./ResturantCard";
import Shimmer from "./shimmer/Shimmer";
const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return listOfResturants.length == 0 ? <Shimmer/> :(
    <div className="body">
      {/* <input placeholder="Search..." className="search" /> */}
      <button
        className="filter"
        onClick={() => {
          const filteredResList = listOfResturants.filter(
            (e) => e?.info?.avgRating > 4
          );
          setListOfResturants(filteredResList);
        }}
      >
        Filter
      </button>
      <div className="res-container">
        {listOfResturants.map((resturant, index) => (
          <RestaurantCard key={resturant?.info?.id} resObj={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
