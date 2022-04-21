import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helper';
export const state = {
  recipe: {},
  search: {
    query: '',
    result: [],
  },
};

export const loadRecipe = async function (recepiId) {
  try {
    const data = await getJSON(`${API_URL}/${recepiId}`);
    const { recipe } = data.data;

    console.log('recipe is: ', recipe);

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_Url,
      image: recipe.image_url,
      servings: recipe.servings,
      cooking: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log('MY receipe object:', state.recipe);
  } catch (error) {
    console.log(`${error} is an error`);
    throw error;
  }
};
export const loadSearchResult = async function (query) {
  try {
    state.search.query = query;

    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);

    state.search.result.data.data.recipes.map(rec => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
    console.log(state.search.result);
  } catch (err) {
    console.log(`${err}🎆🎆🎆🎆🎆🎆there is an error`);
    throw err;
  }
};
