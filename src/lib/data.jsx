export default async function getRecipes(){
    const res = await fetch("https://dummyjson.com/recipes")
    const data = await res.json()
    return data;
}

export async function getRecipeById(id){
    const res = await fetch(`https://dummyjson.com/recipes/${id}`)
    const data = await res.json()
    return data;
}
    
