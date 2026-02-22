import { useEffect, useState } from "react";
import MenuShimmer from "./MenuShimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantmenu.js";



const Rescard_menu1 = () => {
  const { resid } = useParams();

const [expandedCategory, setExpandedCategory] = useState(null);

  const menu = useRestaurantmenu(resid);

const [expandedItem, setExpandedItem] = useState(null);


  // 🔥 Loading state
  if (!menu) return <MenuShimmer />;

  // ✅ Restaurant Info (dynamic safe access)
  const { name, cuisines, costForTwoMessage ,avgRating,totalRatingsString} =
  menu?.cards[2]?.card?.card?.info;

  // ✅ Get REGULAR cards dynamically
  const regularCards = menu?.cards?.find(
    (c) => c?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // ✅ Get all ItemCategory cards
 const itemCategories = regularCards?.filter(
  (c) =>
    c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

return (
  <div className="max-w-[820px] mx-auto px-5 py-6">
    <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-2xl shadow-md">
  <h1 className="text-3xl font-bold mb-2">{name}</h1>

  {/* Rating + Cost */}
  <div className="flex items-center gap-3 text-sm text-gray-700 mb-3">
    <span className="flex items-center gap-1 font-semibold">
      ⭐ {avgRating} ({totalRatingsString})
    </span>
    <span>•</span>
    <span className="flex items-center gap-1 font-semibold">{costForTwoMessage}</span>
  </div>

  
</div>

    <h2 className="text-xl font-semibold mb-4">❧ — MENU — ❧</h2>

    {itemCategories?.map((category) => {
      const cardType = category?.card?.card?.["@type"];
      const title = category?.card?.card?.title;

      // NORMAL CATEGORY
      if (
        cardType ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) {
        const items = category?.card?.card?.itemCards;

        return (
        <div
          className="bg-white border border-gray-200 rounded-xl p-4 mb-6 shadow-sm"
          key={title}
        >
          {/* CATEGORY HEADER */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() =>
              setExpandedCategory(
                expandedCategory === title ? null : title
              )
            }
          >
            <h2 className="text-lg font-semibold">{title}</h2>

            {/* Arrow */}
            <span
              className={`transition-transform duration-300 text-lg ${
                expandedCategory === title ? "rotate-180" : ""
              }`}
            >
              ⌄
            </span>
          </div>

          {/* ITEMS */}
          {expandedCategory === title && (
            <ul className="space-y-5 mt-4">
              {items?.map((item) => {
                const info = item?.card?.info;
                const itemId = info?.id;

                return (
                  <li
                    key={itemId}
                    className=" flex justify-between items-start gap-5 pb-5 border-b last:border-none"
                  >
                    {/* LEFT */}
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-base">
                        {info?.name}
                      </h3>

                      {/* Rating */}
                      {info?.ratings?.aggregatedRating?.rating && (
                        <p className="text-sm text-green-700 font-medium">
                          ⭐ {info?.ratings?.aggregatedRating?.rating}
                          <span className="text-gray-500 ml-1">
                            (
                            {
                              info?.ratings?.aggregatedRating
                                ?.ratingCountV2
                            }
                            )
                          </span>
                        </p>
                      )}

                      {/* Price */}
                      <p className="text-sm font-medium mt-1">
                        ₹ {(info?.price || info?.defaultPrice) / 100}
                      </p>

                      {/* Description */}
                      {info?.description && (
                        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                          {expandedItem === itemId
                            ? info?.description
                            : info?.description.slice(0, 120) }
 
                          {info?.description.length > 120 && (
                            <span
                              className="text-orange-600 cursor-pointer ml-1"
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedItem(
                                  expandedItem === itemId
                                    ? null
                                    : itemId
                                );
                              }}
                            >
                              {expandedItem === itemId
                                ? " less"
                                : " more"}
                            </span>
                          )}
                        </p>
                      )}
                    </div>

                    {/* RIGHT */}
                    <div className="w-28 flex flex-col items-center relative">
                      {info?.imageId && (
                        <img
                          className="w-28 h-24 object-cover rounded-lg"
                          src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/" +
                            info?.imageId
                          }
                          alt={info?.name}
                        />
                      )}

                      <button className="absolute -bottom-3 bg-white border border-gray-300 px-4 py-1 text-sm font-semibold text-green-600 rounded-lg shadow hover:bg-gray-100">
                        ADD
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      );
      }
      
    })}
  </div>
);
};

export default Rescard_menu1;



