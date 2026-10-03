import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header / Intro Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-4 block">
            Our Story
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Bringing Food Lovers Together, One Recipe at a Time.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to Recipe Hub, your ultimate destination for discovering, sharing, and celebrating the joy of cooking. Whether you're a seasoned chef or a passionate home cook, we have something delicious for everyone.
          </p>
        </div>

        {/* Image & Mission Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20 lg:mb-32">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <Image 
                src="https://images.unsplash.com/photo-1556910103-1c02745a872f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="People cooking together in a kitchen" 
                width={800}
                height={600}
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-orange-500/10 pointer-events-none"></div>
            </div>
          </div>
          
          {/* Right: Mission Content */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              We believe that cooking should be accessible, fun, and shared with others. Our mission is to build a global community where culinary enthusiasts can exchange their family secrets, experiment with new flavors, and find inspiration for their next meal.
            </p>
            <ul className="space-y-5 text-gray-700 font-medium">
              <li className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </span>
                Inspiring creativity in the kitchen
              </li>
              <li className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </span>
                Promoting healthy and diverse food cultures
              </li>
              <li className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </span>
                Connecting people through the love of food
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-orange-50 rounded-3xl p-10 lg:p-16 mb-20 lg:mb-24 shadow-sm border border-orange-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-orange-500 mb-2">10k+</h3>
              <p className="text-gray-700 font-semibold">Unique Recipes</p>
            </div>
            <div>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-orange-500 mb-2">2M+</h3>
              <p className="text-gray-700 font-semibold">Active Foodies</p>
            </div>
            <div>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-orange-500 mb-2">500+</h3>
              <p className="text-gray-700 font-semibold">Expert Chefs</p>
            </div>
            <div>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-orange-500 mb-2">4.9</h3>
              <p className="text-gray-700 font-semibold">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Call to Action (CTA) Section */}
        <div className="text-center max-w-2xl mx-auto bg-gray-900 rounded-3xl p-10 lg:p-16 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to start cooking?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join our community today and get access to thousands of recipes, personalized meal plans, and daily cooking tips.
          </p>
          <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/40">
            Explore Recipes Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;