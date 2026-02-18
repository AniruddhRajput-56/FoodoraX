import { useEffect, useState } from "react";
import Res_card from "./Res_card.js";
import Shimmerui from "./Shimmerui.js";
import {Link} from "react-router-dom";



const Body=()=>{
//state variable 
  const[ListOfRes,setListOfRes] = useState([]);
  
  const[FilteredRes,setFilteredRes]= useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    fetchdata();
  },[]);

  const fetchdata=async ()=>{
    //https://corsproxy.io/?=<actual API> using this we can avoid CORS error and by pass it
    // you can also use other CORS proxy extensions available in browser

    const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0035068&lng=77.5890953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);

       // Optinal Chaining
       setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredRes (json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    //   const json = MainPageData;
    // console.log("JSSS", json.data);
    // console.log(
    //   "JSON",
    //   json?.data.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // setListOfRes(
    //   json?.data.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // setFilteredRes(
    //   json?.data.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };

 
if (ListOfRes?.length===0){
  return <Shimmerui/>;
};

  return(
    <div className="body">
      <div className="filter">
          <div className="search">
             <input
          type="text"
          placeholder="Search restaurant..."
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="btn1"
          onClick={() => {
            const updatereslist = ListOfRes.filter(
              (res) =>
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
        className="filter-btn" 
        onClick={()=>{
          const updatereslist= ListOfRes.filter(
            (res)=>res.info.avgRating > 4.3
          );
          setFilteredRes(updatereslist);

        }}> Top Rated Restaurants
                </button>

                
          </div>
        
      </div>
     
       <div className="res-con">
        {
          FilteredRes.map((restaurant)=>{
            return( 
            <Link to={"restaurants/"+restaurant.info.id} key={restaurant.info.id}>
            <Res_card 
            resname={restaurant}
            />
            </Link>);
           
          })
        }
      
       </div>
    </div>
      
  );
      
};

export default Body;