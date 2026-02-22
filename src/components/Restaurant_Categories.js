import Itemlist from "./Itemlist";
import { useState } from "react";
const Restaurant_Categories = ({data}) => {
    const [expandedCategory, setExpandedCategory] = useState(false);
    const handleclick = () => {
            setExpandedCategory(!expandedCategory);
    }

    return(
    //    {Headers}
    <div className=" items-center text-left bg-white border border-gray-200 rounded-xl p-4 mb-6 shadow-sm">
       <div className="flex justify-between items-center cursor-pointer" onClick={handleclick}>
        <h2 className="text-lg font-bold">{data?.title} ({data?.itemCards?.length})</h2>
          <span
              className={`transition-transform duration-300 text-lg ${
                expandedCategory === true ? "rotate-180" : ""
              }`}
            >
              ⌄
            </span>
         </div>
         {/* Item List */}
            {expandedCategory && <Itemlist items={data?.itemCards} />}
    </div>
    );
};

export default Restaurant_Categories;