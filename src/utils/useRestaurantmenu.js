import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resid) => {

    const [menu, setMenu] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

      const fetchMenu = async () => {
        const data = await fetch(`/api/menu?restaurantId=${resid}`);
        const json = await data.json();
        // console.log(json);
        setMenu(json?.data);
      };

    return menu;

};

export default useRestaurantMenu;

// Custom hook to fetch restaurant menu data based on restaurant ID (resid)
//similar to useState and useEffect but we can reuse this logic in multiple components without repeating code
