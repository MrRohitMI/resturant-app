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
      "https://corsproxy.io/?url=https://namastedev.com/api/v1/listRestaurants"
    );
    const json = await data.json();
    let restaurantData = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfResturants(restaurantData);
    setFilteredResturants(
      restaurantData
    );
  };
  if (status === "Offline") return <h1>Please connect to a network.....</h1>;
  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body flex-1 overflow-auto">
      <div className="flex gap-2 items-center">
        <input
          data-testid="search-input"
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
                (e) => e?.info?.avgRating > 4.5
              );
              setFilteredResturants(filteredResList);
            }}
          >
            Top Rated Restaurant
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
      <div className="res-container grid grid-cols-1 gap-7 mx-3 mb-7 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6">
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
