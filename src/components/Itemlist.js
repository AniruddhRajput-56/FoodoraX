import { CDN_URL } from "../utils/constants";


const Itemlist = ({ items }) => {
  return (
    <ul className="space-y-5 mt-4">
  {items?.map((item) => {
    const info = item?.card?.info;
    const itemId = info?.id;

    return (
      <li
        key={itemId}
        className="flex justify-between items-start gap-5 pb-5 border-b last:border-none"
      >
        {/* LEFT */}
        <div className="flex-1 text-left">
          <h3 className="font-semibold text-base">
            {info?.name}
          </h3>

          {/* Rating */}
          {info?.ratings?.aggregatedRating?.rating && (
            <p className="my-1 text-sm text-green-700 font-medium">
              ⭐ {info?.ratings?.aggregatedRating?.rating}
              <span className="text-gray-500 ml-1">
                ({info?.ratings?.aggregatedRating?.ratingCountV2})
              </span>
            </p>
          )}

          {/* Price */}
          <p className="text-sm font-medium mt-1">
            ₹ {(info?.price || info?.defaultPrice) / 100}
          </p>

          {/* Description (full) */}
          {info?.description && (
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {info?.description}
            </p>
          )}
        </div>

        {/* RIGHT */}
        <div className="w-28 flex flex-col items-center relative">
          {info?.imageId && (
            <img
              className="w-28 h-24 object-cover rounded-lg"
              src={
                CDN_URL +
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
  );
};

export default Itemlist;

