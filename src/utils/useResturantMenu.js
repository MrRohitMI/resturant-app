import { useEffect, useState } from "react";

const useResturantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      `https://corsproxy.io/?url=https://namastedev.com/api/v1/listRestaurantMenu/${resId}`
    );
    const json = await data.json();
    
    setResInfo(json.data);
  };
  return resInfo;
};

export default useResturantMenu;
