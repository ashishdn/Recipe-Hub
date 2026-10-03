import React from 'react';

const NotFound = () => {
  return (
    <div className=" bg-gray-50 flex flex-col items-center justify-center px-5 py-40 relative overflow-hidden">
      
      {/* Decorative Background Elements (Optional soft circles) */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      {/* Main Content Container */}
      <div className="z-10 text-center max-w-lg mx-auto">
        
        {/* Large 404 Text */}
        <h1 className="text-9xl font-extrabold text-orange-500 tracking-widest drop-shadow-sm">
          404
        </h1>
        
        {/* Cute Food/Empty Plate Icon */}
        <div className="flex justify-center -mt-8 mb-6 relative z-10">
          <div className="bg-white p-4 rounded-full shadow-lg border-4 border-gray-50">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Oops! This page is off the menu.
        </h2>
        
        {/* Subtext */}
        <p className="text-gray-500 text-sm sm:text-base mb-8 leading-relaxed">
          The recipe or page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back to the kitchen!
        </p>
        
        {/* Call to Action Button */}
        {/* Note: Next.js e ekhane <a> er bodole <Link href="/"> use korbe */}
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-3.5 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-orange-500/30"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Home
        </a>

      </div>
    </div>
  );
};

export default NotFound;