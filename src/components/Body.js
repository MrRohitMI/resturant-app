import { useState, useEffect } from "react";
import RestaurantCard from "./ResturantCard";
import Shimmer from "./shimmer/Shimmer";
import { Link } from "react-router-dom";
import useCheckStatus from "../utils/useCheckStatus";
const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const status = useCheckStatus();
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
    setFilteredResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (status === "Offline") return <h1>Please connect to a network.....</h1>;
  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <input
        placeholder="Search..."
        className="search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="loginBtn"
        onClick={() => {
          const filteredResList = listOfResturants.filter((e) =>
            e?.info?.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredResturants(filteredResList);
        }}
      >
        Search
      </button>
      <button
        className="filter"
        onClick={() => {
          const filteredResList = listOfResturants.filter(
            (e) => e?.info?.avgRating > 4.2
          );
          setListOfResturants(filteredResList);
        }}
      >
        Filter
      </button>
      <div className="res-container">
        {filteredResturants.map((resturant, index) => (
          <Link
            key={resturant?.info?.id ?? index}
            to={"/resturant/" + resturant?.info?.id}
          >
            <RestaurantCard resObj={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
