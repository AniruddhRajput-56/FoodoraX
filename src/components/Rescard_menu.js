// import { useEffect, useState } from "react";
// import Shimmerui from "./Shimmerui";

// import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";



// const Rescard_menu=( )=>{
//     const{resid} = useParams();
//     const [menu, setMenu] = useState(null);

//     useEffect(()=>{
//         fetchmenu();
//     },[]);


//  const fetchmenu=async()=>{
    
// // try{
//      const data= await fetch(MENU_API+resid);
        
//         const json = await data.json();
        
//         console.log(json);
//         setMenu(json?.data);

// // }
// // catch(error){
// //     console.log(error);
// // }
      
        
//     };
    

//     if(menu===null){   
//         return <Shimmerui/>;
//     }

//   const { name, cuisines, costForTwoMessage } =
//   menu?.cards[2]?.card?.card?.info;

// const cardData =
//   menu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ||
//   menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

// const itemCards = cardData?.itemCards || [];

//     return(
//         <div className="menu">
//             <h1>{name}</h1>
//              <p>{cuisines.join(", ")}</p>
//              <p>{costForTwoMessage}</p>
//              <h1>Menu</h1>
//              <div className="menuitem">
//                   <ul className="ulist">
//                     {itemCards.map((item)=>
//                     <li  className="list" key={item.card.info.id}>
//                         {item.card.info.name}  {"Rs."}
//                          {item.card.info.price/100 || item.card.info.defaultPrice/100}
//                     </li>)}
                    
//                 </ul>
//              </div>
              
//         </div>
//     );

        
//     };

   

// export default Rescard_menu;   

import { useEffect, useState } from "react";
import Shimmerui from "./Shimmerui";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantmenu.js";


const Rescard_menu = () => {
  const { resid } = useParams();

  const [expandedItem, setExpandedItem] = useState(null);

  const menu = useRestaurantmenu(resid);


  // 🔥 Loading state
  if (!menu) return <Shimmerui />;

  // ✅ Restaurant Info (dynamic safe access)
  const { name, cuisines, costForTwoMessage } =
  menu?.cards[2]?.card?.card?.info;

  // ✅ Get REGULAR cards dynamically
  const regularCards = menu?.cards?.find(
    (c) => c?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // ✅ Get all ItemCategory cards
 const itemCategories = regularCards?.filter(
  (c) =>
    c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
    c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
);


//   return (
  
//              <div className="menu">
//                <h1>{name}</h1>
//                 <p>{cuisines?.join(", ")}</p>
//                  <p>{costForTwoMessage}</p>
//                   <h1>Menu</h1>


//      {itemCategories?.map((category) => (
//   <div className="category-box" key={category?.card?.card?.title}  >
//     <h2 className="category-title">
//       {category?.card?.card?.title}
//     </h2>

//     <ul className="ulist">
//             {category?.card?.card?.itemCards?.map((item) => (
//              <li className="menu-item" key={item?.card?.info?.id}>
//   <div className="item-left">
//     <h3 className="item-name">
//       {item?.card?.info?.name}
//     </h3>
//     <p className="item-rating">
//   ⭐ {item?.card?.info?.ratings?.aggregatedRating?.rating}
//   <span className="rating-count">
//     ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
//   </span>
// </p>


//     <p className="item-price">
//       ₹
//       {(item?.card?.info?.price ||
//         item?.card?.info?.defaultPrice) / 100}
//     </p>

//  <p className="item-desc">
//   {expandedItem === item?.card?.info?.id
//     ? item?.card?.info?.description
//     : item?.card?.info?.description?.slice(0, 120) + ".."}

//   {item?.card?.info?.description?.length > 120 && (
//     <span
//       className="more-text"
//       onClick={() =>
//         setExpandedItem(
//           expandedItem === item?.card?.info?.id
//             ? null
//             : item?.card?.info?.id
//         )
//       }
//     >
//       {expandedItem === item?.card?.info?.id
//         ? " "
//         : " more"}
//     </span>
//   )}
// </p>


//   </div>

//   <div className="item-right">
//     {item?.card?.info?.imageId && (
//       <img
//         className="item-img"
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/" +
//           item?.card?.info?.imageId
//         }
//         alt="food"
//       />
//     )}
//     <button className="add-btn">ADD</button>
//   </div>
// </li>

//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

return (
  <div className="menu">
    <h1>{name}</h1>
    <p>{cuisines?.join(", ")}</p>
    <p>{costForTwoMessage}</p>
    <h1>Menu</h1>

    {itemCategories?.map((category) => {
      const cardType = category?.card?.card?.["@type"];
      const title = category?.card?.card?.title;

      // 🔥 NORMAL CATEGORY
      if (
        cardType ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) {
        const items = category?.card?.card?.itemCards;

        return (
          <div className="category-box" key={title}>
            <h2 className="category-title">{title}</h2>

            <ul className="ulist">
              {items?.map((item) => {
                const info = item?.card?.info;
                const itemId = info?.id;

                return (
                  <li className="menu-item" key={itemId}>
                    <div className="item-left">
                      <h3 className="item-name">{info?.name}</h3>

                      {info?.ratings?.aggregatedRating?.rating && (
                        <p className="item-rating">
                          ⭐ {info?.ratings?.aggregatedRating?.rating}
                          <span className="rating-count">
                            (
                            {
                              info?.ratings?.aggregatedRating
                                ?.ratingCountV2
                            }
                            )
                          </span>
                        </p>
                      )}

                      <p className="item-price">
                        ₹ {(info?.price || info?.defaultPrice) / 100}
                      </p>

                      {info?.description && (
                        <p className="item-desc">
                          {expandedItem === itemId
                            ? info?.description
                            : info?.description.slice(0, 120) + ".."}

                          {info?.description.length > 120 && (
                            <span
                              className="more-text"
                              onClick={() =>
                                setExpandedItem(
                                  expandedItem === itemId
                                    ? null
                                    : itemId
                                )
                              }
                            >
                              {expandedItem === itemId
                                ? " less"
                                : " more"}
                            </span>
                          )}
                        </p>
                      )}
                    </div>

                    <div className="item-right">
                      {info?.imageId && (
                        <img
                          className="item-img"
                          src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/" +
                            info?.imageId
                          }
                          alt="food"
                        />
                      )}
                      <button className="add-btn">ADD</button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }

      // 🔥 NESTED CATEGORY (NEW FIX)
      if (
        cardType ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      ) {
        const nestedCategories =
          category?.card?.card?.categories;

        return (
          <div key={title}>
            

            {nestedCategories?.map((nested) => (
              <div
                className="category-box"
                key={nested?.title}
              >
                <h3>{nested?.title}</h3>

                <ul className="ulist">
                  {nested?.itemCards?.map((item) => {
                    const info = item?.card?.info;
                    const itemId = info?.id;

                    return (
                      <li
                        className="menu-item"
                        key={itemId}
                      >
                        <div className="item-left">
                          <h3>{info?.name}</h3>
                          <p>
                            ₹{" "}
                            {(info?.price ||
                              info?.defaultPrice) /
                              100}
                          </p>
                        </div>

                        <div className="item-right">
                          {info?.imageId && (
                            <img
                              className="item-img"
                              src={
                                "https://media-assets.swiggy.com/swiggy/image/upload/" +
                                info?.imageId
                              }
                              alt="food"
                            />
                          )}
                          <button className="add-btn">
                            ADD
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        );
      }

      
    })}
  </div>
);
};

export default Rescard_menu;



