import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      
      {/* Spinner Container */}
      <div className="relative flex items-center justify-center">
        {/* Background Ring (Light Orange) */}
        <div className="w-20 h-20 md:w-24 md:h-24 border-8 border-orange-100 rounded-full"></div>
        
        {/* Animated Spinning Ring (Dark Orange) */}
        <div className="absolute w-20 h-20 md:w-24 md:h-24 border-8 border-transparent border-t-orange-500 border-r-orange-500 rounded-full animate-spin"></div>
        
        {/* Center Pulsing Dot */}
        <div className="absolute w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
      </div>
      
      {/* Text Content */}
      <div className="mt-8 text-center">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 tracking-wide">
          Whipping up something delicious...
        </h3>
        <div className="flex items-center justify-center gap-1 mt-2">
          <p className="text-sm md:text-base text-gray-500">Preparing recipes</p>
          {/* Animated loading dots */}
          <span className="flex space-x-1 mt-1">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </span>
        </div>
      </div>

    </div>
  );
};

export default Loading;