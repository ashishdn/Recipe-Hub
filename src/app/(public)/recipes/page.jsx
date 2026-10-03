import getRecipes from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function RecipePage() {
  const recipesData = await getRecipes();
    const recipes = recipesData?.recipes || []
  return (
    <div>
      <section className="container mx-auto my-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
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
        ))}
      </div>
    </section>
    </div>
  )
}
