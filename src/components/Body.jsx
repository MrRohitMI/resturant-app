import { useState, useEffect, useContext } from "react";
import RestaurantCard, { WithLabelcard } from "./ResturantCard";
import Shimmer from "./shimmer/Shimmer";
import { Link } from "react-router-dom";
import useCheckStatus from "../utils/useCheckStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const ResturantPromotedCard = WithLabelcard(RestaurantCard);
  const status = useCheckStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);
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
      <div className="flex gap-2 items-center">
        <input
          placeholder="Search..."
          className="border border-gray-400 rounded my-5 mx-2 p-2"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <div>
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
        </div>
        <div>
          <button
            className="bg-blue-400 rounded px-1 py-1.5 border border-blue-900"
            onClick={() => {
              const filteredResList = listOfResturants.filter(
                (e) => e?.info?.avgRating > 4
              );
              setFilteredResturants(filteredResList);
            }}
          >
            Top Rated Resturant
          </button>
        </div>
        <div>
          <input
            type="text"
            className="m-2 p-2 border border-gray-700 rounded"
            placeholder="Enter Value"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="res-container flex gap-4 flex-wrap">
        {filteredResturants.map((resturant, index) => (
          <Link
            key={resturant?.info?.id ?? index}
            to={"/resturant/" + resturant?.info?.id}
          >
            {resturant?.info?.avgRating >= 4.5 ? (
              <ResturantPromotedCard resObj={resturant} />
            ) : (
              <RestaurantCard resObj={resturant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
