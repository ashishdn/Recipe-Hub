import Image from 'next/image';
import React from 'react';

const RecipeCard = ({recipe}) => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Top Section: Image & Basic Info */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col lg:flex-row mb-10">
          
          {/* Recipe Image */}
          <div className="w-full lg:w-1/2 h-80 lg:h-auto relative">
            <Image 
              src={recipe.image} 
              alt={recipe.name} 
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-gray-800 shadow-md">
              {recipe.cuisine} Cuisine
            </div>
          </div>

          {/* Recipe Info */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            {/* Meal Types */}
            <div className="flex gap-2 mb-3">
              {recipe.mealType.map((meal, index) => (
                <span key={index} className="text-xs font-semibold uppercase tracking-wider text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                  {meal}
                </span>
              ))}
            </div>

            <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              {recipe.name}
            </h1>

            {/* Ratings & Reviews */}
            <div className="flex items-center gap-2 mb-8">
              <div className="flex text-yellow-400">
                {/* Simple Star SVG */}
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <span className="text-lg font-bold text-gray-800">{recipe.rating}</span>
              <span className="text-gray-500 text-sm">({recipe.reviewCount} reviews)</span>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="text-center">
                <span className="block text-gray-500 text-xs uppercase mb-1">Prep Time</span>
                <span className="font-bold text-gray-900">{recipe.prepTimeMinutes} m</span>
              </div>
              <div className="text-center border-l border-gray-200">
                <span className="block text-gray-500 text-xs uppercase mb-1">Cook Time</span>
                <span className="font-bold text-gray-900">{recipe.cookTimeMinutes} m</span>
              </div>
              <div className="text-center border-l border-gray-200">
                <span className="block text-gray-500 text-xs uppercase mb-1">Servings</span>
                <span className="font-bold text-gray-900">{recipe.servings}</span>
              </div>
              <div className="text-center border-l border-gray-200">
                <span className="block text-gray-500 text-xs uppercase mb-1">Difficulty</span>
                <span className="font-bold text-orange-500">{recipe.difficulty}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Ingredients & Instructions */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Column: Ingredients */}
          <div className="w-full lg:w-1/3 bg-white p-8 rounded-3xl shadow-sm h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-between">
              Ingredients
              <span className="text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {recipe.ingredients.length} items
              </span>
            </h2>
            <ul className="space-y-4">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-orange-100 p-1 rounded-full text-orange-500">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>

            {/* Calories Info */}
            <div className="mt-8 p-4 bg-orange-50 rounded-2xl flex items-center justify-between">
              <span className="font-semibold text-gray-800">Calories per serving</span>
              <span className="font-bold text-orange-600">{recipe.caloriesPerServing} kcal</span>
            </div>
          </div>

          {/* Right Column: Instructions */}
          <div className="w-full lg:w-2/3 bg-white p-8 lg:p-10 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Instructions</h2>
            <div className="space-y-8">
              {recipe.instructions.map((step, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gray-100 text-gray-600 font-bold rounded-full flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-2">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 px-4 py-2 rounded-lg text-sm cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;