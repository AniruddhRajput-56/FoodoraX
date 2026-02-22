import { useEffect, useState } from "react";
import Res_card from "./Res_card.js";
import Shimmerui from "./Shimmerui.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { withpromotedlabel } from "./Res_card.js";



const Body = () => {
  const [ListOfRes, setListOfRes] = useState([]);
  const [FilteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const Res_cardwithpromotelabel = withpromotedlabel(Res_card);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0386956&lng=72.6307533&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRes(restaurants);
    setFilteredRes(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h2 className="text-center text-xl mt-10">
        🔴 You are Offline
      </h2>
    );
  }

  if (ListOfRes?.length === 0) return <Shimmerui />;

  return (
    <div className="p-4 font-['Gill_Sans','Gill_Sans_MT',Calibri,'Trebuchet_MS',sans-serif]">
      {/* Search + Filter */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <input
          type="text"
          placeholder="Search restaurant..."
          className=" ml-4 h-8 w-55 px-2 border shadow-md rounded-md
                     font-['Gill_Sans','Gill_Sans_MT',Calibri,'Trebuchet_MS',sans-serif]"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="h-8 px-2 shadow-md rounded-md bg-gray-50 border hover:bg-orange-500 hover:text-white transition"
          onClick={() => {
            const updatereslist = ListOfRes.filter((res) =>
              res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilteredRes(updatereslist);
          }}
        >
          Search
        </button>

        <button
          className="h-8 px-3 bg-gray-50 shadow-md rounded-md border hover:bg-orange-500 hover:text-white transition"
          onClick={() => {
            const updatereslist = ListOfRes.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRes(updatereslist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Grid */}
      <div className="  flex flex-wrap gap-4">
        {FilteredRes.map((restaurant) => (
          <Link
            to={"restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
           {restaurant.info.promoted ? (
              <Res_cardwithpromotelabel resname={restaurant} />
            ) : (
              <Res_card resname={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;