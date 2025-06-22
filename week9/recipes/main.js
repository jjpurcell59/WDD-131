import recipes from "./recipes.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const recipesSection = document.querySelector(".recipes");

  recipes.forEach((recipe) => {
    const recipeArticle = document.createElement("article");
    recipeArticle.classList.add("recipe");

    recipeArticle.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <div class="recipe-content">
        <h2>${recipe.name}</h2>
        <p class="description">${recipe.description}</p>
        <div class="meta">
          <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
            ${"⭐".repeat(recipe.rating)}${"☆".repeat(5 - recipe.rating)}
          </span>
        </div>
        <button>Dessert</button>
      </div>
    `;
    recipesSection.appendChild(recipeArticle);
  });
});