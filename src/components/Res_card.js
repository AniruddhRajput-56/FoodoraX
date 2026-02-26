import { CDN_URL } from "../utils/constants";

const Res_card = (props) => {
  const { resname } = props;

  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    areaName,
    cloudinaryImageId,
  } = resname?.info;

  return (
    <div className="m-1.25 h-90 w-70 rounded-[5%] border-2 border-[#ebdede] bg-[#fffef9]  
                    font-['Gill_Sans','Gill_Sans_MT',Calibri,'Trebuchet_MS',sans-serif]
                    transition-transform duration-200 hover:scale-[1.03] hover:border-black hover:shadow-lg cursor-pointer">
      
      <img
        className="h-42.5 w-full rounded-[5%] object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />

      <div className="p-2 space-y-2">
  <h3 className="text-lg font-semibold">{name}</h3>
  <p className="text-base text-gray-600">
  {cuisines.join(", ").length > 37
    ? cuisines.join(", ").slice(0, 37) + "..."
    : cuisines.join(", ")}
</p>
  <p className="text-base ">{costForTwo}</p>
  <p className="text-base ">🌟 {avgRating} </p>
  <p className="text-base ">{areaName}</p>
</div>
    </div>
  );

    };
// Higher-Order Component (HOC) to add a "PROMOTED" label to the Res_card component
    export const withopenlabel = ()=>{
  return (props)=>{ 
    return (
      <div className="relative">
        <Res_card {...props} />
        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full shadow">
          OPEN
        </div>
      </div>
    );

  };
    };

export default Res_card;