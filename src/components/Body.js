import { useState } from "react";
import RestaurantCard from "./ResturantCard";
import resList from "../utils/resList";
const Body = () => {
  const [listOfResturants,setListOfResturants]  = useState(resList);
  return (
    <div className="body">
      {/* <input placeholder="Search..." className="search" /> */}
      <button
        className="filter"
        onClick={() => {
          const filteredResList = listOfResturants.filter((e) => e.rating > 4);
          setListOfResturants(filteredResList);
        }}
      >
        Filter
      </button>
      <div className="res-container">
        {listOfResturants.map((resturant, index) => (
          <RestaurantCard key={index} resObj={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
