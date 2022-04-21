import View from './View.js';

import icons from '../../img/icons.svg';
import { Fraction } from 'fractional';

class RecipeView extends View {
  _parentElement = document.querySelector('.recipe');

  _errorMessage = 'we could not find that recipe. Please try another one!';
  _message = '';

  addHandlerRender(handler) {
    const allTypeOfEvents = ['hashchange', 'load'];
    for (let index = 0; index < allTypeOfEvents.length; index++) {
      const element = allTypeOfEvents[index];
      window.addEventListener(element, handler);
    }
  }
  _genrateMarkup() {
    return `
    <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${
      this._data.title
    }" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}_icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${
              this._data.cooking
            }</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}_icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${
              this._data.servings
            }</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}_icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}_icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${icons}_icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${icons}_icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${this._ingridentMarkUp(this._data.ingredients)}
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${
              this._data.publisher
            }</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${icons}_icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `;
  }

  _ingridentMarkUp(ingredients) {
    let ingredentHTML = '';
    for (let index = 0; index < ingredients.length; index++) {
      const ingredient = ingredients[index];
      const ingredientLI = `<li class="recipe__ingredient">
                 <svg class="recipe__icon">
                   <use href="src/img/icons.svg_icon-check"></use>
                   </svg>
                   <div class="recipe__quantity">${ingredient.quantity}</div>
                   <div class="recipe__description">
                     <span class="recipe__unit">${ingredient.unit}</span>
                     ${ingredient.description}
                   </div>
                 </li>`;
      ingredentHTML = ingredentHTML + ingredientLI;
    }
    return ingredentHTML;
    // return '<H1>PARUL</H1>';
  }
}

export default new RecipeView();
