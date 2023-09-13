document.addEventListener("DOMContentLoaded", () => {

const cardArr = [
  { name: "food-1", img: "img/food-1.jpg" },
  { name: "food-2", img: "img/food-2.jpg" },
  { name: "food-3", img: "img/food-3.jpg" },
  { name: "food-4", img: "img/food-4.jpg" },
  { name: "food-5", img: "img/food-5.jpg" },
  { name: "food-6", img: "img/food-6.jpg" },
  { name: "food-1", img: "img/food-1.jpg" },
  { name: "food-2", img: "img/food-2.jpg" },
  { name: "food-3", img: "img/food-3.jpg" },
  { name: "food-4", img: "img/food-4.jpg" },
  { name: "food-5", img: "img/food-5.jpg" },
  { name: "food-6", img: "img/food-6.jpg" },
];

cardArr.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

//create your board
function createBoard() {
  for (let i = 0; i < cardArr.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'img/blank.webp')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

//check for matches
function checkForMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  
  if(optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'img/blank.webp')
    cards[optionTwoId].setAttribute('src', 'img/blank.webp')
    alert('You have clicked the same image!')
  }
  else if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match')
    cards[optionOneId].setAttribute('src', 'img/white.jpg')
    cards[optionTwoId].setAttribute('src', 'img/white.jpg')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'img/blank.webp')
    cards[optionTwoId].setAttribute('src', 'img/blank.webp')
    alert('Sorry, try again')
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length;
  if  (cardsWon.length === cardArr.length/2) {
    resultDisplay.textContent = 'Congratulations! You found them all!'
  }
}

//flip your card
function flipCard() {
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArr[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArr[cardId].img)
  if (cardsChosen.length ===2) {
    setTimeout(checkForMatch, 500)
  }
}

createBoard()
})

