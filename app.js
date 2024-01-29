let cards = [];
let flippedCards = [];
let lockBoard = false;

document.getElementById('Btn').addEventListener('click', initializeGame);



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