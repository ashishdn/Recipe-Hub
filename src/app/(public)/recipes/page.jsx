
import getRecipes from '@/lib/data';
import RecipeClient from "../../../components/recipePage/RecipeClient";

export default async function RecipePage() {
  const recipesData = await getRecipes();
    const recipes = recipesData?.recipes || []

  return (
   <div>
    <RecipeClient recipes={recipes}></RecipeClient>
   </div>
  )
}
