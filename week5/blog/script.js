document.addEventListener('DOMContentLoaded', () => {
    const articlesContainer = document.querySelector('.articles'); 

    const articles = [
        {
            id: 1,
            title: "Diary of a Wimpy Kid",
            date: "2007",
            description:
                "Diary of a Wimpy Kid is a humorous and relatable story about Greg Heffley, a middle schooler navigating the challenges of growing up. Through his diary, Greg shares his misadventures, friendships, and family life, making readers laugh and empathize with his struggles.",
            imgSrc: "diary-of-a-wimpy-kid-cover.jpg",
            imgAlt: "Diary of a Wimpy Kid Book Cover",
            ages: "8-12",
            genre: "Fiction",
            stars: "⭐⭐⭐⭐⭐",
        },
        {
            id: 2,
            title: "Septimus Heap Book One: Magyk",
            date: "July 5, 2022",
            description:
                "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you. This book is full of adventure, magic, and surprises that will keep you hooked.",
            imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
            imgAlt: "Book cover for Septimus Heap 1",
            ages: "10-14",
            genre: "Fantasy",
            stars: "⭐⭐⭐⭐⭐",
        },
        {
            id: 3,
            title: "Magnus Chase Book One: Sword of Summer",
            date: "December 12, 2021",
            description:
                "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good. This book is packed with humor, action, and Norse mythology.",
            imgSrc:
                "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
            imgAlt: "Book cover for Magnus Chase 1",
            ages: "12-16",
            genre: "Fantasy",
            stars: "⭐⭐⭐⭐",
        },
        {
            id: 4,
            title: "Belgariad Book One: Pawn of Prophecy",
            date: "Feb 12, 2022",
            description:
                "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
            imgSrc:
                "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
            imgAlt: "Book cover for Pawn of Prophecy",
            ages: "12-16",
            genre: "Fantasy",
            stars: "⭐⭐⭐⭐⭐",
        },
    ];

    articles.forEach((article) => {
        const articleElement = document.createElement('article');
        articleElement.classList.add('article');

        const visibleDescription = article.description.split('.')[0] + '.';
        const hiddenDescription = article.description.slice(visibleDescription.length);

        const articleHTML = `
            <div class="details">
                <p class="date">${article.date}</p>
                <p class="age-range">${article.ages}</p>
                <p class="genre">${article.genre}</p>
                <p class="rating">${article.stars}</p>
            </div>
            <div class="content">
                <h2>${article.title}</h2>
                <img src="${article.imgSrc}" alt="${article.imgAlt}" class="book-cover">
                <p class="description">
                    ${visibleDescription}
                    <span class="hidden-text" style="display: none;">${hiddenDescription}</span>
                </p>
                <button class="read-more-btn">Read More</button>
            </div>
        `;

        articleElement.innerHTML = articleHTML;
        articlesContainer.appendChild(articleElement);

        const readMoreBtn = articleElement.querySelector('.read-more-btn');
        const hiddenText = articleElement.querySelector('.hidden-text');

        readMoreBtn.addEventListener('click', () => {
            const isHidden = hiddenText.style.display === 'none' || hiddenText.style.display === '';
            hiddenText.style.display = isHidden ? 'inline' : 'none';
            readMoreBtn.textContent = isHidden ? 'Read Less' : 'Read More';
        });
    });
});