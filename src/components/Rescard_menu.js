import { useEffect, useState } from "react";
import MenuShimmer from "./MenuShimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantmenu.js";
import Restaurant_Categories from "./Restaurant_Categories.js";

const Rescard_menu=( )=>{
    const{resid} = useParams();
    const menu = useRestaurantmenu(resid);

    const [expandedCategory, setExpandedCategory] = useState(null);

  if (!menu) return <MenuShimmer />;

  // Restaurant Info (dynamic safe access)
  const { name, cuisines, costForTwoMessage ,avgRating,totalRatingsString} =
  menu?.cards[2]?.card?.card?.info;

  // Get REGULAR cards dynamically
  const regularCards = menu?.cards?.find(
    (c) => c?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    // Get all ItemCategory cards
 const itemCategories = regularCards?.filter(
  (c) =>{
        const type = c?.card?.card?.["@type"];
        return (
          type ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
        );
      }
);

    return(
        <div className="max-w-205 mx-auto px-5 py-6 ">
   <div className=" max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md">
   <h1 className="text-3xl font-bold mb-3">{name}</h1>

   {/* Rating + Cost */}
   <div className="flex justify-center items-center flex-wrap gap-3 text-sm text-gray-700 mb-3">
   <p className=" font-semibold">{cuisines.join(", ")}</p>
     <span className=" font-semibold">
       ⭐ {avgRating} ({totalRatingsString})
     </span>
     <span>•</span>
    <span className="font-semibold">{costForTwoMessage}</span>
   </div>

     </div>

        <h2 className="text-xl font-semibold m-4">❧ — MENU — ❧</h2>

        {itemCategories?.map((category , index)=>(
          <Restaurant_Categories
           key={category?.card?.card?.title} 
           data={category?.card?.card} 
           expandedCategory={index === expandedCategory && true}
           setExpandedCategory={()=> setExpandedCategory(index)} 
           />
        ))}   
        </div> 
    );        
    };

export default Rescard_menu;   






