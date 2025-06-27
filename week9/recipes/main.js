import recipes from "./recipes.mjs";

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const listLength = list.length;
  const randomNum = random(listLength);
  return list[randomNum];
}

function tagsTemplate(tags) {
  return tags.map(tag => `<button>${tag}</button>`).join('');
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    html += i <= rating ? "⭐" : "☆";
  }
  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `
    <article class="recipe">
      <img src="${recipe.image}" alt="${recipe.name}">
      <div class="recipe-content">
        <h2>${recipe.name}</h2>
        <p class="description">${recipe.description}</p>
        <div class="meta">
          ${ratingTemplate(recipe.rating)}
          <div class="recipe__tags">${tagsTemplate(recipe.tags)}</div>
        </div>
      </div>
    </article>
  `;
}

function renderRecipes(recipeList) {
  const recipesSection = document.querySelector(".recipes");
  recipesSection.innerHTML = recipeList.map(recipeTemplate).join('');
}

function filterRecipes(query) {
  const filtered = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query) ||
    recipe.description.toLowerCase().includes(query) ||
    recipe.tags.find(tag => tag.toLowerCase().includes(query)) ||
    recipe.recipeIngredient.find(ingredient => ingredient.toLowerCase().includes(query))
  );
  return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(event) {
  event.preventDefault();
  const query = document.querySelector("#search-input").value.toLowerCase();
  const filteredRecipes = filterRecipes(query);
  renderRecipes(filteredRecipes);
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

document.addEventListener("DOMContentLoaded", () => {
  init();
  document.querySelector(".search-form").addEventListener("submit", searchHandler);
});