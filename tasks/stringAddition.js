const stringAddition = function (names) {
  let addedStrings = "";
  for (let index = 0; index < names.length; index++) {
    const name = names[index];
    const ingredientLI = `<li class="recipe__ingredient">
               <svg class="recipe__icon">
                 <use href="src/img/icons.svg#icon-check"></use>
                 </svg>
                 <div class="recipe__quantity">${name}</div>
                 <div class="recipe__description">
                   <span class="recipe__unit">${name}</span>
                   ${name.description}
                 </div>
               </li>`;
    addedStrings = addedStrings + ingredientLI;
  }
  return addedStrings;
};

const result = stringAddition(["Kamal", "Parul", "Davisha", "Kannan"]);

console.log(result);
