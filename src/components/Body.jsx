import { useState, useEffect, useContext } from "react";
import RestaurantCard, { WithLabelcard } from "./ResturantCard";
import Shimmer from "./shimmer/Shimmer";
import { Link } from "react-router-dom";
import useCheckStatus from "../utils/useCheckStatus";
import UserContext from "../utils/UserContext";
import emptyRestaurant from "../assets/images/no-restaurant.jpg"
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState(false);
  const RestaurantPromotedCard = WithLabelcard(RestaurantCard);
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
    setListOfRestaurants(restaurantData);
    setFilteredRestaurants(
      restaurantData
    );
  };
  const btnClass = "bg-blue-400 rounded px-1 py-1.5 border border-blue-900 hover:bg-blue-500"
  if (status === "Offline") return <h1>Please connect to a network.....</h1>;
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body flex-1 overflow-auto">
      <div className="block gap-2 items-center md:flex">
        <div className="flex gap-2 items-center justify-center md:justify-start">
          <input
            data-testid="search-input"
            placeholder="Search Name..."
            className="border border-gray-400 rounded my-5 mx-2 p-2 focus:outline-none focus:ring-2 focus:ring-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if (e.target.value == "") { setFilteredRestaurants(listOfRestaurants) }
            }}
          />
          <div>
            <button
              className={`${btnClass} me-2`}
              onClick={() => {
                const filteredResList = listOfRestaurants.filter((e) =>
                  e?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredResList);
              }}
            >
              Search
            </button>
          </div></div>
        <div className="flex justify-center md:justify-start mb-4 md:mb-0">
          {allRestaurant ? <button
            className={btnClass}
            onClick={() => {
              setFilteredRestaurants(listOfRestaurants);
              setAllRestaurant(prev => !prev)
            }}
          >
            All Restaurant
          </button> : <button
            className={btnClass}
            onClick={() => {
              const filteredResList = listOfRestaurants.filter(
                (e) => e?.info?.avgRating > 4.5
              );
              setFilteredRestaurants(filteredResList);
              setAllRestaurant(prev => !prev)
            }}
          >
            Top Rated Restaurant
          </button>}
        </div>
        {/* <div>
          <input
            type="text"
            className="m-2 p-2 border border-gray-700 rounded"
            placeholder="Enter Value"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div> */}
      </div>
      {filteredRestaurants?.length >= 1 ?
        <div className="res-container grid grid-cols-1 gap-7 mx-3 mb-7 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6">
          {filteredRestaurants.map((restaurant, index) => (
            <Link
              key={restaurant?.info?.id ?? index}
              to={"/restaurant/" + restaurant?.info?.id}
            >
              {restaurant?.info?.avgRating >= 4.5 ? (
                <RestaurantPromotedCard resObj={restaurant} />
              ) : (
                <RestaurantCard resObj={restaurant} />
              )}
            </Link>
          ))}
        </div> : <div><p className="text-center font-bold text-red-600 text-xl lg:text-4xl">No results found.</p>
          <img src={emptyRestaurant} alt="No Restaurant" className="m-auto mb-5 w-8/12 lg:w-4/12" /></div>}
    </div>
  );
};
export default Body;
