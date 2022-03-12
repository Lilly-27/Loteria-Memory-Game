let score = 0
const scoreEL = document.querySelector(".js-score");
const grid = document.querySelector(".grid")

// Creating an array of objects with all my cards:

    const cardsArray = [
        {name: 'El Nopal', img: "cards/el_nopal.png"},
        {name: 'El Nopal', img: "cards/el_nopal.png"},
    
        {name: 'El Pescado', img: "cards/el_pescado.png"},
        {name: 'El Pescado', img: "cards/el_pescado.png"},
    
        {name: 'La Calavera', img: "cards/la_calavera.png"},
        {name: 'La Calavera', img: "cards/la_calavera.png"},
    
        {name: 'La Luna', img: "cards/la_luna.png"},
        {name: 'La Luna', img: "cards/la_luna.png"},
    
        {name: 'La Rosa', img: "cards/la_rosa.png"},
        {name: 'La Rosa', img: "cards/la_rosa.png"},
    
        {name: 'La Sandia', img: "cards/la_sandia"},
        {name: 'La Sandia', img: "cards/la_sandia"},
    ]

// Creating my board 

function createBoard () {
    for (let i=0; i < cardsArray.length; i++) {
        const card = document.createElement("img");
        card.classList.add('empty-space')
        card.setAttribute('src', 'cards/blank_space.png');
        card.setAttribute('data-id', i);
        // card.addEventListener('click', flipcard);
        console.log(grid)
        grid.appendChild(card);
    }
    
}
createBoard()