document.addEventListener("DOMContentLoaded", () => {
    const brandSelect = document.getElementById("brandFilter");
    const yearSelect = document.getElementById("yearFilter");
    const drinkGrid = document.querySelector(".drink-grid");
  
    let drinksData = [];
    let lastFocusedButton = null;
  
    fetch("brand.json")
      .then((res) => res.json())
      .then((data) => {
        drinksData = data;
        renderDrinks(drinksData);
      })
      .catch((err) => {
        console.error("Failed to load brand.json:", err);
        drinkGrid.innerHTML = "<p>Failed to load drinks. Please try again later.</p>";
      });
  
    brandSelect.addEventListener("change", () => {
      renderDrinks(filterDrinks());
    });
  
    yearSelect.addEventListener("change", () => {
      renderDrinks(filterDrinks());
    });
  
    function filterDrinks() {
      const selectedBrand = brandSelect.value;
      const selectedYear = yearSelect.value;
  
      return drinksData.filter((drink) => {
        const brandMatch = selectedBrand === "all" || drink.brand === selectedBrand;
        const yearMatch = selectedYear === "all" || drink.year.toString() === selectedYear;
        return brandMatch && yearMatch;
      });
    }
  
    function renderDrinks(drinks) {
      drinkGrid.innerHTML = "";
      const loadingMessage = document.querySelector('.loading-message');
      if (loadingMessage) loadingMessage.remove();
  
      if (drinks.length === 0) {
        drinkGrid.innerHTML = "<p>No drinks match the selected filters.</p>";
        return;
      }
  
      drinks.forEach((drink) => {
        const card = document.createElement("div");
        card.className = "drink-card";
        card.innerHTML = `
          <img src="${drink.image}" alt="${drink.name}">
          <h3>${drink.name}</h3>
          <p><strong>Brand:</strong> ${drink.brand}</p>
          <p><strong>Year:</strong> ${drink.year}</p>
          <p><strong>Rating:</strong> ⭐ ${drink.rating} / 5</p>
          ${drink.rating >= 4.5 ? '<span class="top-rated">Top Rated!</span>' : ''}
          <button class="view-more" data-name="${drink.name}" data-description="${drink.description}">View More</button>
        `;
        drinkGrid.appendChild(card);
      });
  
      document.querySelectorAll(".view-more").forEach((button) => {
        button.addEventListener("click", (e) => {
          lastFocusedButton = e.target;
          const name = e.target.dataset.name;
          const description = e.target.dataset.description;
          document.getElementById("modalTitle").textContent = name;
          document.getElementById("modalDescription").textContent = description;
          document.getElementById("modal").style.display = "block";
        });
      });
    }
  
    document.getElementById("closeModal").addEventListener("click", () => {
      document.getElementById("modal").style.display = "none";
      if (lastFocusedButton) lastFocusedButton.focus();
    });
  
    window.addEventListener("click", (e) => {
      if (e.target.id === "modal") {
        document.getElementById("modal").style.display = "none";
        if (lastFocusedButton) lastFocusedButton.focus();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.getElementById("modal").style.display = "none";
        if (lastFocusedButton) lastFocusedButton.focus();
      }
    });
  });