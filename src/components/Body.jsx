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
        className="border border-gray-400 rounded my-5 mx-2 p-2"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="bg-blue-400 rounded px-1 py-1.5 border border-blue-900 me-2"
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
        className="bg-blue-400 rounded px-1 py-1.5 border border-blue-900"
        onClick={() => {
          const filteredResList = listOfResturants.filter(
            (e) => e?.info?.avgRating > 4
          );
          setFilteredResturants(filteredResList);
        }}
      >
        Filter
      </button>
      <div className="res-container flex gap-4 flex-wrap">
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
