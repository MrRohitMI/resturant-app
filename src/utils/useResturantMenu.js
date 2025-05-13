import { useEffect, useState } from "react";

const useResturantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=${resId}`
    );
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useResturantMenu;
