// White Boarding:
// Once we click the start button, the six pairs will appear and the 3- minute timer starts.
// For ever pair we match, we gain 10 points. For ever card we select incorrectly, we are deducted 5 points.
// I want my game to know when we made a pair and make those cards disappear and add 10 points to the bank.
// I want me game to know when we did not make a pair and put the cards back faced-down. 
// When we win, change the screen to say "Bien Hecho! Great job!"
// When we run out of time, change the screen to say, "Ya fue tiempo! Game Over"

let score = 0
const scoreEL = document.querySelector(".js-score");

const cardsArray = [
    {name: 'El Nopal', img: "el_nopal.png"},
    {name: 'El Nopal', img: "el_nopal.png"},

    {name: 'El Pescado', img: "el_pescado.png"},
    {name: 'El Pescado', img: "el_pescado.png"},

    {name: 'La Calavera', img: "la_calavera.png"},
    {name: 'La Calavera', img: "la_calavera.png"},

    {name: 'La Luna', img: "la_luna.png"},
    {name: 'La Luna', img: "la_luna.png"},

    {name: 'La Rosa', img: "la_rosa.png"},
    {name: 'La Rosa', img: "la_rosa.png"},

    {name: 'La Sandia', img: "la_sandia"},
    {name: 'La Sandia', img: "la_sandia"},
]

console.log(cardsArray)

const container = document.querySelector(".container")
// Create a function that passes the name of the image

function createCard (fileName) {
    const card = document.createElement("div");
    const img = document.createElement("img");
    img.src = "cards/" + fileName
    card.appendChild(img);
    container.appendChild(card);
}

for (let i=0; i < cardsArray.length; i++) {

}