// White Boarding:
// I am creating a memory game that has six pairs. 
// I want to start the game with a screen that says "Bienvenidos."
// With a "start" button. The screen's color palette is green, salmon, and white.
// Once we click the start button, 
const cardArray = [
    {
        name: 'La Luna',
        img: "la_luna.png"
    }

]
const container = document.querySelector(".container")
// Create a function that passes the name of the image

function createCard (fileName) {
    const card = document.createElement("div");
    const img = document.createElement("img");
    img.src = "cards/" + fileName
    card.appendChild(img);
    container.appendChild(card);
}