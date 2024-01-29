let cards = [];
let flippedCards = [];
let lockBoard = false;

document.getElementById('startBtn').addEventListener('click', initializeGame);

function initializeGame() {
     hideElements();
     resetGame();
     cards = createCardsPairs();
     cards = shuffleArray(cards);
     createBoard();
}
function hideElements() {
     const h1 = document.querySelector('.h1');
     const h2 = document.querySelector('.h2');
     const startBtn = document.getElementById('startBtn');

     h1.style.display = 'none';
     h2.style.display = 'none';
     startBtn.style.display = 'none';
}

function createCardPairs() {
     const pairs = [];

     pairs.push(1, 1);
     pairs.push(2, 2);
     pairs.push(3, 3);
     pairs.push(4, 4);
     pairs.push(5, 5);
     pairs.push(6, 6);
     pairs.push(7, 7);
     pairs.push(8, 8);
     return pairs;
}
function createBoard() {
     const gameBoard = document.getElementById('game-board');
     gameBoard.innerHTML = '';

     for (let i = 0; i < cards.length; i++) {
          const card = createCardElement(i);
          gameBoard.appendChilda(card);
     }
     setTimeout(() => revealNumbers(), 1000);
}

function revealNumbers() {
     const cardsElements = document.querySelectorAll('.box');
     
     cardsElements.forEach((card, index) => {
          card.textContent = cards[index];
     });
}

function flipCard(card, index) {
     card.classList.add('flipped');
     flippedCards.push({card, index});

     if(flippedCards.length === 2) {
          lockBoard = true;
          setTimeout(checkMatch, 500);
     }
}

function checkMatch(){
     const [card1, card2] = flippedCards;
     if (cards[card1.index] === cards[card2.index]) {
          card1.card.classList.remove('matched');
          card2.card.classList.remove('matched');
     } else {
          setTimeout(() => {
            card1.card.classList.remove('flipped');
            card2.card.classList.remove('flipped');
          }, 500);
     }
     flippedCards = [];
     lockBoard = false;

     if (document.querySelectorAll('.matched').lenght === cards.length) {
          announceWin();
     }
}
function announceWin(){
     alert('Congradulation! You matched all the cards!');
}
function shuffleArray(array) {
     function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
               const j =
          }
     }
}
let  box = document.querySelector(".box")
     box.style.backgroundImage = "url('./pink.jpeg')"
     box.style.backgroundColor = "green"

document.addEventListener("DOMContentLoaded", function (){
     const button = document.querySelector('.Btn');
     const gameBoard = document.getElementById('game-board');
     const boxes = doument.querySelectorAll('.box');
     
     let flippedBoxe = 0

     function handleBoxClick() {
          this,classList.toggle('flipped');
          if (this.classList.contains('flipped')) {
               flippedBoxes ++;
          }else {
               flippedBoxxes --;  
          }
          checkWin();
     }
     function checkWin() {
          if (fillppeBoxes === boxes.length) {
          console.log('Congratulations! You win!')
          }
     }
});
//      function handleButtonClick() {
//           gameBoard.style.visibility = 'visible';
//           boxes.forEach(box => 
//                box.addEventListener('click', handleBoxClick));{

//                } 
//                button.addEventListener('click', handleButtonClick);
          
//           };
// });
         
//     function initializeGame() {
//          startBtn.style.display  = 'none';
//          h1.style.display = 'none';
//          h2.style.display = 'none';
//          gameBoard.style.visibility = 'visible';

//          const cardValues = []

//          cards = shuffleArray(cardValues);

//          for (let i = 0; i < cards.length; i++) {
//           createdCard(i);
//          }
//     }
// function createdCard(index) {
//      const card = document.createElement("div");
//      card.className = "box"; 
//      card.textContent = cards[index];
//      card.addEventListener("click", function () {
//           if (!lockBoard) flippedCards(card, index);
//      });
//      gameBoard.appendChild(card);
// }4
//      function flipCard(card, index) {
//           card.classlist.add("flipped");
//           flippedCards.push({ card, index });

//      if (flippedCards.length === 2) {
//           lockBoard = true ; 
//           setTimeout(checkMatch, 500);     
//           }
//      }

//      function checkMatch() {
//           const [card1, card2] = flippedCards;

//           if(cards[card1.index] === cards[card2.index]) {
//                   card1.card.classList.add("matched");
//                   card2.card.classList.add("matched");
//           }else{
//                card1.card.classList.remove("flipped");
//                card2.card.classList.remove("flipped");
//           }

//           flippedCards = [];
//           lockBoard = false;
//           if (document.querySelectorAll('.matched').length === cards.length * 2) {
//               alert("Congratulations! You Matched all the Cards!");
//           }
//      }
//      function shuffleArray(array) {
//           for (let i = array.length - 1; i > 0; i--) {
//               const j = Math.floor(Math.random() * (i + 1));
//               [array[i], array[j]] = [array[j], array[i]];
//           }
//           return array;
//      }
//      function resetGame() {
//           startBtn.style.display = 'block';
//           h1.style.display = 'block';
//           h2.style.display = 'block';
//           gameBoard.style.visibility = 'hidden';
//           gameBoard.innerHTML = '';
//      }


// let Btn = document.addEventListiner(click, "Click