import { useEffect, useState , useContext} from "react";
import Res_card from "./Res_card.js";
import Shimmerui from "./Shimmerui.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { withopenlabel } from "./Res_card.js";
import UserContext from "../utils/UserContext.js";



const Body = () => {
  const [ListOfRes, setListOfRes] = useState([]);
  const [FilteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const Res_cardwithopenlabel = withopenlabel(Res_card);

  const {loggedinuser , setusername}=useContext(UserContext);

  useEffect(() => {
    fetchdata(); 
  }, []);

  const fetchdata = async () => {
    // const data = await fetch(
    //   "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0386956&lng=72.6307533&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    const data = await fetch("/api/swiggy");
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
    <div className=" bg-[#f6f1ec]  p-4 font-['Gill_Sans','Gill_Sans_MT',Calibri,'Trebuchet_MS',sans-serif]">
      {/* Search + Filter */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <input
          type="text"
          placeholder="Search restaurant..."
          className=" ml-10 h-8 w-100 px-2 border shadow-md rounded-md
                     font-['Gill_Sans','Gill_Sans_MT',Calibri,'Trebuchet_MS',sans-serif]"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="px-4 py-1.5 text-sm -mt-1 sm:mt-1 font-semibold bg-[#cce3d0] text-gray-800 rounded-md m-2 shadow-sm hover:bg-[#b4d6bd] transition duration-200"
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
          className="px-4 py-1.5 text-sm -mt-1 sm:mt-1 font-semibold bg-[#cce3d0] text-gray-800 rounded-md m-2 shadow-sm hover:bg-[#b4d6bd] transition duration-200"
          onClick={() => {
            const updatereslist = ListOfRes.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRes(updatereslist);
          }}
        >
          Top Rated Restaurants
        </button>
        {/* live change name */}
        <label className="ml-32">UserName : </label>
        <input className="h-8 w-50 px-2 border shadow-md rounded-md
                     font-['Gill_Sans','Gill_Sans_MT',Calibri,'Trebuchet_MS',sans-serif]" 
        value={loggedinuser}
        onChange={(e)=>
          {setusername(e.target.value)}
      }>
        </input>
      </div>

      {/* Restaurant Grid */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 ">
  {FilteredRes.map((restaurant) => (
    <Link
      to={"restaurants/" + restaurant.info.id}
      key={restaurant.info.id}
    >
      {restaurant.info.isOpen ? (
        <Res_cardwithopenlabel resname={restaurant} />
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