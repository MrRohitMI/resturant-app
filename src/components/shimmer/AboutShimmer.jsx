const AboutShimmer = () => {
  return (
    <div className="flex-1 overflow-auto bg-gray-50 px-4 md:px-10 py-10 animate-pulse">
      
      {/* Title Section */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="h-8 bg-gray-300 rounded w-2/3 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto"></div>
      </div>

      {/* Cards Grid (same as your main layout) */}
      <div className="res-container grid grid-cols-1 gap-7 mx-3 mb-7 sm:grid-cols-2 lg:grid-cols-4 
                      *:h-40 *:rounded-xl *:bg-gray-300">
        
        <div></div>
        <div></div>
        <div></div>
        <div></div>

      </div>

      {/* Bottom Section (like tech stack) */}
      <div className="max-w-4xl mx-auto mt-10 flex justify-center gap-3">
        <div className="h-8 w-20 bg-gray-300 rounded-full"></div>
        <div className="h-8 w-20 bg-gray-300 rounded-full"></div>
        <div className="h-8 w-20 bg-gray-300 rounded-full"></div>
      </div>

    </div>
  );
};

export default AboutShimmer;