const Shimmerui = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="w-64 bg-[#fffef9] rounded-xl overflow-hidden shadow-md m-4 animate-pulse"
        >
          <div className="w-full h-40 bg-gray-300"></div>
          <div className="p-4 space-y-2">
            <div className="h-5 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmerui;
