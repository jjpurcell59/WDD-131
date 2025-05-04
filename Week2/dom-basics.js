const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");

const newHeading = document.createElement("h2");
newHeading.innerText = "DOM Basics";

const newP = document.createElement("p");
newP.innerText = "This was added through Javascript";

newSection.appendChild(newHeading);
newSection.appendChild(newP);
document.body.appendChild(newSection);