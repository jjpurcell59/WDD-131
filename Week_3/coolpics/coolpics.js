document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.querySelector("nav ul");

    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("hide");
    });

    function handleResize() {
        if (window.innerWidth > 1000) {
            navMenu.classList.remove("hide");
        } else {
            navMenu.classList.add("hide");
        }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    const gallery = document.querySelector(".gallery");

    gallery.addEventListener("click", (event) => {
        const clickedImage = event.target.closest("img");
        if (!clickedImage) return;

        const src = clickedImage.src.replace("-sm.jpeg", "-full.jpeg");
        const alt = clickedImage.alt;

        const modal = document.createElement("dialog");
        modal.innerHTML = `
            <img src="${src}" alt="${alt}">
            <button class="close-viewer">X</button>
        `;
        document.body.appendChild(modal);

        modal.showModal();

        const closeButton = modal.querySelector(".close-viewer");
        closeButton.addEventListener("click", () => {
            modal.close();
            modal.remove();
        });

        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.close();
                modal.remove();
            }
        });
    });
});