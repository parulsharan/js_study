import { async } from 'regenerator-runtime';

const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      // 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    );

    const jsonData = await res.json();

    if (!res.ok) throw new Error(`${jsonData.message}(${res.status})`);
    // console.log(res, data);
    console.log('jsonData: ', jsonData);
    let { recipe } = jsonData.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_Url,
      image: recipe.image,
      serving: recipe.serving,
      cookingtime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(recipe);
  } catch (err) {
    alert(err);
  }
};
