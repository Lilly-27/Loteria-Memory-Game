let score = 0
const result = document.querySelector("#result");
const grid = document.querySelector(".grid")

let cardsChosen = []
let cardsChosenId = []
const match = []

// Creating an array of objects with all my cards:

    const cardsArray = [
        {name: 'El-Nopal', img: "cards/el_nopal.png"},{name: 'El-Nopal', img: "cards/el_nopal.png"},
    
        {name: 'El-Pescado', img: "cards/el_pescado.png"},{name: 'El-Pescado', img: "cards/el_pescado.png"},
    
        {name: 'La-Calavera', img: "cards/la_calavera.png"},{name: 'La-Calavera', img: "cards/la_calavera.png"},
    
        {name: 'La-Luna', img: "cards/la_luna.png"},{name: 'La-Luna', img: "cards/la_luna.png"},
    
        {name: 'La-Rosa', img: "cards/la_rosa.png"},{name: 'La-Rosa', img: "cards/la_rosa.png"},
    
        {name: 'La-Sandia', img: "cards/la_sandia.png"},{name: 'La-Sandia', img: "cards/la_sandia.png"},
    ]

// Creating my board, adding a data

function createBoard () {
    for (let i=0; i < cardsArray.length; i++) {
        const card = document.createElement("img");
        card.classList.add('empty-space')
        card.setAttribute('src', 'cards/back_card.png');
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard);
        // console.log(grid)
        grid.appendChild(card);
    }
    
}
createBoard()

function flipCard () {
    // console.log(event.target)
    this.removeEventListener('click', flipCard)
    const cardId= this.getAttribute('data-id')
    cardsChosen.push(this)
    // console.log(cardsChosen)
    cardsChosenId.push(cardId)
    this.setAttribute ('src', cardsArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 200)
    }
    
}

function checkMatch () {
    const cards = document.querySelectorAll('img')
    const firstOptionId = cardsChosenId[0]
    const secondOptionId = cardsChosenId[1]
    if (cardsChosen[0].getAttribute('src') === cardsChosen[1].getAttribute('src')) {
        alert("Yes, it's a match! You earned 20 points!")
        cards[firstOptionId].setAttribute('src', 'cards/blank_space.png')
        cards[secondOptionId].setAttribute('src', 'cards/blank_space.png')
        match.push(cardsChosen[0])
        match.push(cardsChosen[1])
        result.innerText = parseInt(result.innerText) + 20
        win()
    } else {
        cards[firstOptionId].setAttribute('src', 'cards/back_card.png')
        cards[secondOptionId].setAttribute('src', 'cards/back_card.png')
        cardsChosen.forEach((card) => card.addEventListener('click', flipCard))
        result.innerText = parseInt(result.innerText) - 5
        alert ("Not a match. You lost 5 points. Try again!")
    }
    cardsChosen = []
    cardsChosenId = []
}
// Need to nake cards random
cardsArray.sort(()=> 0.5 - Math.random())

// Need to create a "YOU WON!" alert with the whole screen.
// I want a modal to pop up once all cards are matched. I want
// it to announce that I won. I want it to showcase my points. 
// I want there to be a button where we can restart the game. 

// Winning condition: All pairs are stored into match. if match array has 12 items = done.
// === triggers modal, and checkMatch function invokes win.

function win () {
if (match.length === 12) {
    const win = document.querySelector('.modal')
    win.style.display ="block" 
}
}

// Would like to add musical timer.

