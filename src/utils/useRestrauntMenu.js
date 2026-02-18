import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";
import { menuData } from "../menuData";
const useRestaurantMenu = (resId) => {
  const [restaurantMenus, setRestaurantMenus] = useState([{}]);
  const [restaurantHeadData, setRestaurantHeadData] = useState([]);
  const newData = [];
  async function getRestaurantsMenu() {
    // const response = await fetch(FETCH_MENU_URL + resId);
    // const data = await response?.json();
    const data = menuData[resId];
    setRestaurantHeadData(data?.data?.cards?.[0]?.card?.card?.info);
    data?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR.cards?.map(
      (item) => {
        item?.card?.card?.itemCards?.map((innerItem) => {
          const {
            name,
            price,
            defaultPrice,
            imageId,
            description,
            itemAttribute,
            id: menuItemId,
          } = innerItem?.card?.info;
          //console.log({ name, price, imageId, description, itemAttribute });

          newData.push({
            name,
            price: price / 100,
            defaultPrice: defaultPrice / 100,
            imageId,
            description,
            itemAttribute,
            menuItemId,
            itemAttribute,
          });
        });
      }
    );

    setRestaurantMenus(newData);
  }

  useEffect(() => {
    getRestaurantsMenu();
  }, []);

  return [restaurantMenus, restaurantHeadData];
};

export default useRestaurantMenu;
