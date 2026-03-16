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
    sla
  } = resname?.info;

  return (
    <div className="m-1.5 h-auto w-64 rounded-[5%] border-2 border-[#ebdede] bg-[#fffef9]
                    font-['Gill_Sans','Gill_Sans_MT',Calibri,'Trebuchet_MS',sans-serif]
                    transition-transform duration-200 hover:scale-[1.03] hover:border-black hover:shadow-lg cursor-pointer">

      <div className="relative">
        <img
          className="h-44 w-full rounded-[5%] object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />

        {/* PRICE LABEL */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-md">
          {costForTwo}
        </div>
      </div>

      <div className="p-2 space-y-2">
        {/* NAME */}
        <h3 className="text-left font-semibold px-1 leading-tight">
          {name}
        </h3>

        {/* RATING + TIME */}
        <div className="flex items-center px-1 text-base">
          <span className="flex items-center justify-center w-4 h-4 rounded-full bg-green-600 text-white text-sm mr-1">
            ★
          </span>
          <span className="text-gray-800 pr-1">{avgRating}</span>
          <h4>•</h4>
          <span className="text-gray-700 px-1">{sla?.slaString}</span>
        </div>

        {/* CUISINES */}
        <p className="text-left text-base text-gray-600 px-1">
          {cuisines.join(", ").length > 3
            ? cuisines.join(", ").slice(0, 30) + "..."
            : cuisines.join(", ")}
        </p>

        {/* AREA */}
        <p className="text-left px-1">{areaName}</p>
      </div>
    </div>
  );
};

// Higher-Order Component (HOC) to add a "OPEN" label to the Res_card component
export const withopenlabel = () => {
  return (props) => {
    return (
      <div className="relative">
        <Res_card {...props} />
        <div className="text-xs absolute top-2 left-2 bg-orange-500 text-white px-2 rounded-full shadow">
          OPEN
        </div>
      </div>
    );
  };
};

export default Res_card;