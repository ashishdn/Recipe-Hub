import RecipeCard from '@/components/homepage/RecipeCard';
import { getRecipeById } from '@/lib/data';
import React from 'react'

export default async function RecipeDetails({params}) {
    const {id} = await params;

    const recipeDetails = await getRecipeById(id);
  return (
    <div>
      <RecipeCard recipe={recipeDetails} />
    </div>
  )
}
