const newsData = [
  {
    title: "Monster Ultra Wild Passion launches soon",
    summary: "A passion fruit-based Monster Ultra flavor, Wild Passion, is set to launch later this year—likely around October.",
    image: "https://www.stack3d.com/cdn-cgi/image/w=1260,q=50,f=auto/wp-content/uploads/2025/07/monster-ultra-wild-passion.jpg",
    url: "https://www.stack3d.com/2025/07/upcoming-monster-ultra-wild-passion.html"
  },
  {
    title: "3D Energy teases new 2025 flavors",
    summary: "Christian Guzman’s 3D Energy is testing new flavors like Candy Blast, Strawberry Watermelon, and more heading into 2025.",
    image: "https://www.stack3d.com/cdn-cgi/image/w=1260,q=50,f=auto/wp-content/uploads/2024/11/3d-energy-drink-potential-new-flavors.jpg",
    url: "https://www.stack3d.com/2024/11/3d-energy-drink-potential-new-flavors-for-2025.html"
  },
  {
    title: "Ghost reveals special can for Warped Tour",
    summary: "Ghost teamed with Vans Warped Tour to release a 16oz special edition Original Energy Drink can, sold exclusively at tour events.",
    image: "https://www.stack3d.com/cdn-cgi/image/w=1260,q=50,f=auto/wp-content/uploads/2025/06/ghost-x-warped-tour-ghost-energy-drink.jpg",
    url: "https://www.stack3d.com/2025/06/warped-tour-original-ghost-energy.html"
  }
];

function renderNewsCarousel() {
  const container = document.getElementById("newsCarousel");
  newsData.forEach(item => {
    const div = document.createElement("div");
    div.className = "news-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <a href="${item.url}" class="read-more" target="_blank">Read More →</a>`;
    container.appendChild(div);
  });
}

function setupCarouselNavigation() {
  const container = document.getElementById("newsCarousel");
  const items = container.children;
  let index = 0;

  function update() {
    container.style.transform = `translateX(-${index * 100}%)`;
  }

  document.querySelector(".carousel-nav.prev").addEventListener("click", () => {
    index = (index - 1 + items.length) % items.length;
    update();
  });

  document.querySelector(".carousel-nav.next").addEventListener("click", () => {
    index = (index + 1) % items.length;
    update();
  });
}

function loadDrinksFromJSON() {
  fetch('drinks.json')
    .then(response => response.json())
    .then(data => {
      const grid = document.querySelector('.drink-grid');
      if (!grid) return;
      data.forEach(drink => {
        if (drink.name && drink.description) {
          const card = document.createElement('div');
          card.className = 'drink-card';
          card.innerHTML = `
            <img src="${drink.image}" alt="${drink.name}">
            <h3>${drink.name}</h3>
            <p>${drink.description}</p>
            <p>⭐ ${drink.rating} / 5</p>
          `;
          grid.appendChild(card);
        }
      });
    })
    .catch(error => console.error('Error loading drink cards:', error));
}

function loadBrandComparison() {
  fetch('drinks.json')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.querySelector('#brandTable tbody');
      if (!tableBody) return;
      data.forEach(brand => {
        if (brand.brand && brand.origin) {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td style="padding: 12px 8px; text-align: center;">${brand.brand}</td>
            <td style="padding: 12px 8px; text-align: center;">${brand.origin}</td>
            <td style="padding: 12px 8px; text-align: center;">${brand.caffeineContent}</td>
            <td style="padding: 12px 8px; text-align: center;">${brand.sugarContent}</td>
            <td style="padding: 12px 8px; text-align: center;"><a href="${brand.website}" target="_blank">Visit</a></td>
          `;
          tableBody.appendChild(row);
        }
      });
    })
    .catch(error => console.error('Error loading brand comparison:', error));
}

document.addEventListener("DOMContentLoaded", () => {
  renderNewsCarousel();
  setupCarouselNavigation();
  loadDrinksFromJSON();
  loadBrandComparison();
});