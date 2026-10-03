import React from 'react';

const Hero = () => {
  return (
    <section className="bg-orange-50 py-16 md:py-24">
      {/* Container Start */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm mb-4 block">
            Welcome to Recipe Hub
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Discover & Share <br />
            <span className="text-orange-500">Delicious Recipes</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Explore thousands of mouth-watering recipes curated by food lovers around the world. Perfect meals for every occasion.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button className="w-full sm:w-auto px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/30">
              Explore Recipes
            </button>
            <button className="w-full sm:w-auto px-8 py-3 bg-white text-gray-800 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 shadow-md border border-gray-100">
              Share a Recipe
            </button>
          </div>
        </div>

        {/* Right Side: Image Content */}
        <div className="w-full md:w-1/2">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            {/* Note: In Next.js you can also use the <Image /> component here */}
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Healthy and delicious food plate" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            {/* Smooth gradient overlay on image for a premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>

      </div>
      {/* Container End */}
    </section>
  );
};

export default Hero;