import * as model from './model.js';
import { state } from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';
import resultView from './views/resultView.js';

const controlRecipes = async function () {
  try {
    resultView.renderSpinner();
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner(recipeContainer);

    //1. loding recipe
    await model.loadRecipe(id);

    //2. rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
    recipeView.renderError(`${err} 🔥🔥🔥🔥🔥🔥`);
  }
};
const controlSearchResult = async function () {
  try {
    //1 get search query
    const query = searchView.getquery();
    if (!query) return;
    //2 load search result
    await model.loadSearchResult('query');
    //3 render research
    console.log(model.state.recipe.result);
    resultView.render(model.state.recipe.result);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerRender(controlSearchResult);
};
init();
