"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default  function RecipePage({recipes}) {
  const [searchQuery, setSearchQuey] = useState("")

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  

  return (
    <div className="container mx-auto grid grid-cols-12 gap-10 py-10">
     <div className="col-span-3">
      <div>
        <h3 className='text-l font-semibold mb-2'>Search Your Food</h3>
        <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuey(e.target.value)}
        placeholder="Search recipes..."
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      </div>
     </div>
     <div className="col-span-9">
       <section className="container mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            filteredRecipes.length > 0 ? (
                filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Image 
              src={recipe.image} 
              alt={recipe.name} 
              width={400} 
              height={400} 
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">{recipe.name}</h3>
              <Link href={`/recipes/${recipe.id}`}>
                <button className="mt-4 px-4 py-1  bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
                  See More
                </button>
              </Link>
            </div>
          </div>
        ))
            ) : (<p className="text-gray-500">No recipes found matching your search.</p>)
        }
      </div>
      </section>
     </div>
    </div>
  )
}
