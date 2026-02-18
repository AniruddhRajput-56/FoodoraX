import { CDN_URL } from "../utils/constants";


const Res_card=(props)=>{
   const { resname } = props;
   const{
    name,
    cuisines,
    costForTwo,
     avgRating,
     areaName ,
     cloudinaryImageId,
      sla 

   }           =resname?.info;
    return(
       <div className="res-card">
       <img className="img2" src={CDN_URL+cloudinaryImageId}/>
   
       <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>Price : {costForTwo}</p>
      <p>Avgrating : {avgRating} 🌟</p>
      <p>{areaName}</p>

   
       
       </div>
    );
};

export default Res_card;