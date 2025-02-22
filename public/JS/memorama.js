document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/data')
        .then(response => response.json())
        .then(data => {
            processData(data); // Llamamos a la función con data
        })
        .catch(error => console.error('Error al obtener los datos:', error));
});

let palabras = [];
let palabrasEspañol = [];
let palabrasIngles = [];
let cards = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;

// Función para procesar los datos
function processData(data) {
    // Ahora asumimos que `data` es un array de objetos con las propiedades español e ingles
    palabras = data;
    console.log(palabras[0]);

    // Crear dos arrays separados
    palabrasEspañol = palabras.map(item => item.castella);
    palabrasIngles = palabras.map(item => item.angles);
    console.log(palabrasEspañol);

    // Tomar 8 cartas de cada array
    const selectedPalabras = palabrasEspañol.slice(0, 8);
    const selectedTraducciones = palabrasIngles.slice(0, 8);
    console.log(selectedPalabras);

    // Crear un nuevo array que contenga pares de palabras y traducciones
    for (let i = 0; i < selectedPalabras.length; i++) {
        cards.push({ español: selectedPalabras[i], ingles: selectedTraducciones[i], index: i });
        cards.push({ español: selectedTraducciones[i], ingles: selectedPalabras[i], index: i });
    }

    cards.sort(() => 0.5 - Math.random()); // Barajamos las cartas
    initGame(); // Iniciar el juego después de cargar las palabras
}

const gameBoard = document.getElementById('game-board');

function createCard(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.español = card.español;
    cardElement.dataset.ingles = card.ingles;
    cardElement.dataset.index = card.index;

    const frontFace = document.createElement('div');
    frontFace.classList.add('front');
    frontFace.textContent = "?"; // Mostrar un signo de interrogación en la parte frontal

    const backFace = document.createElement('div');
    backFace.classList.add('back');
    backFace.textContent = card.ingles; // Mostrar la traducción en la parte de atrás

    cardElement.appendChild(frontFace);
    cardElement.appendChild(backFace);

    cardElement.addEventListener('click', flipCard);
    gameBoard.appendChild(cardElement);
}

function speak(text, lang) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    // Hablar la traducción solo si es una palabra en español
    const palabraParaHablar = this.dataset.español;
    const esPalabraEnEspañol = palabrasEspañol.includes(palabraParaHablar);
    const lang = esPalabraEnEspañol ? 'en-US' : 'es-ES'; // Solo hablamos en inglés si es una palabra en español

    if (esPalabraEnEspañol) {
        const traduccionParaHablar = this.dataset.ingles;
        speak(traduccionParaHablar, lang);
    }

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    const firstCardIndex = firstCard.dataset.index;
    const secondCardIndex = secondCard.dataset.index;

    const isMatch = firstCardIndex === secondCardIndex;

    if (isMatch) {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetCards();
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetCards();
        }, 1000);
    }
}

function resetCards() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function showCardsTemporarily() {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => card.classList.add('flipped'));

    setTimeout(() => {
        allCards.forEach(card => card.classList.remove('flipped'));
    }, 3000);
}

function initGame() {
    cards.forEach(createCard);
    showCardsTemporarily();
}
          
function restartGame() {
    // Limpiar el tablero
    gameBoard.innerHTML = '';

    // Reiniciar las variables
    firstCard = null;
    secondCard = null;
    lockBoard = false;

    // Seleccionar nuevas palabras y crear nuevas cartas
    const selectedPalabras = palabrasEspañol.slice(0, 8);
    const selectedTraducciones = palabrasIngles.slice(0, 8);

    cards = [];
    for (let i = 0; i < selectedPalabras.length; i++) {
        cards.push({ español: selectedPalabras[i], ingles: selectedTraducciones[i], index: i });
        cards.push({ español: selectedTraducciones[i], ingles: selectedPalabras[i], index: i });
    }
    
    cards.sort(() => 0.5 - Math.random()); // Barajamos las cartas

    initGame(); // Iniciar el juego nuevamente
}

document.getElementById('restart-btn').addEventListener('click', restartGame);