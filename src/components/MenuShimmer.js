const MenuShimmer = () => {
  return (
    <div className="bg-[#f5f5f4] min-h-screen px-4 py-6 sm:px-6 md:px-12 lg:px-32 animate-pulse">
      {/* Title */}
      <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-8"></div>

      {/* Multiple menu cards */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto sm:max-w-6xl">
        {[...Array(8)].map((_, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg p-4 shadow-md w-full mx-auto"
          >
            {/* Menu Section Title */}
            <div className="h-4 bg-gray-300 rounded w-1/3 mb-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuShimmer;