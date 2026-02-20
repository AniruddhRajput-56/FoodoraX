

const useRestaurantCard = () => {

    const[ListOfRes,setListOfRes] = useState([]);

      const[FilteredRes,setFilteredRes]= useState([]);

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

    return { ListOfRes, FilteredRes };
}