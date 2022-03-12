// White Boarding:
// Once we click the start button, the six pairs will appear and the 3- minute timer starts.
// For ever pair we match, we gain 10 points. For ever card we select incorrectly, we are deducted 5 points.
// I want my game to know when we made a pair and make those cards disappear and add 10 points to the bank.
// I want me game to know when we did not make a pair and put the cards back faced-down. 
// When we win, change the screen to say "Bien Hecho! Great job!"
// When we run out of time, change the screen to say, "Ya fue tiempo! Game Over"

// Peusudocoding
// I need to create an array of objects to house all the cards I am having. 
// I need to set the score to 0
// I need to grab that score and create a function that updates it every time I make a pair.
// I need to make a for loop that shuffles through the cards

    // let score = 0
    // const scoreEL = document.querySelector(".js-score");
    // const grid = document.querySelector(".grid")
    
    // // Creating an array of objects with all my cards:
    
    //     const cardsArray = [
    //         {name: 'El Nopal', img: "cards/el_nopal.png"},
    //         {name: 'El Nopal', img: "cards/el_nopal.png"},
        
    //         {name: 'El Pescado', img: "cards/el_pescado.png"},
    //         {name: 'El Pescado', img: "cards/el_pescado.png"},
        
    //         {name: 'La Calavera', img: "cards/la_calavera.png"},
    //         {name: 'La Calavera', img: "cards/la_calavera.png"},
        
    //         {name: 'La Luna', img: "cards/la_luna.png"},
    //         {name: 'La Luna', img: "cards/la_luna.png"},
        
    //         {name: 'La Rosa', img: "cards/la_rosa.png"},
    //         {name: 'La Rosa', img: "cards/la_rosa.png"},
        
    //         {name: 'La Sandia', img: "cards/la_sandia"},
    //         {name: 'La Sandia', img: "cards/la_sandia"},
    //     ]
    
    // // Creating my board 
    
    // function createBoard () {
    //     for (let i=0; i < cardsArray.length; i++) {
    //         const card = document.createElement("img");
    //         card.setAttribute('src', 'cards/blank_space.png');
    //         card.setAttribute('data-id', i);
    //         // card.addEventListener('click', flipcard);
    //         console.log(grid)
    //         grid.appendChild(card);
    //     }
        
    // }
    // createBoard()




// console.log(createBoard)

// Create a function that passes the name of the image
// Patricio helped start creating the card. Added to function createBoard to 
// start making the entire board.

// function createBoard () {
//     for (let i=0; i <cardsArray.length; i++) {
//     const board = document.createElement("div");
//     const card = document.createElement("img");
//     card.setAttribute('src', 'cards/blank_space.png');
//     card.setAttribute('data-id', i);
//     board.appendChild(card);
//     grid.appendChild(board);
//     }
// }
// createBoard()