

// Conexió a la BBDD
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/data')
        .then(response => response.json())
        .then(data => {
            processData(data); // Crida la funció processData, amb l'array data del vocabulari
        })
        .catch(error => console.error('Error al obtenir les dades de la BBDD:', error));
});

let words = [];
let randomNumber;
// Funció per processar les dades
function processData(data) {
    
    words = data.map(item => ({
        word: item.angles,         // Angles paraula a adivinar
        translation: item.castella // Castella la pista
    }));
    
    startGame(); // Iniciar el joc només iniciar l'aplicacció.
}

let selectedWord;
let selectedTranslation;
let guessedLetters = [];
let wrongGuesses = 0;
const maxTries = 6;

const wordDisplay = document.getElementById('wordDisplay');
const letterInput = document.getElementById('letterInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const restartButton = document.getElementById('restartButton');
const hangmanCanvas = document.getElementById('hangmanCanvas');
const ctx = hangmanCanvas.getContext('2d');

function startGame() {
    //Busquem una paraula aleatoria
    randomNumber = Math.floor(Math.random() * words.length);
    selectedWord = words[randomNumber].word; // Guardem la paraula anglesa en la variable
    selectedTranslation = words[randomNumber].translation; // Guardem la traducció
    guessedLetters = [];
    wrongGuesses = 0;
    message.textContent = "";
    letterInput.value = '';
    letterInput.focus();
    updateDisplay();
    drawHangman();

    // Per pantalla la traducció que servirá com a pista
    const indicameDisplay = document.getElementById('indicameDisplay');
    indicameDisplay.textContent = selectedTranslation; 
}
//Aquesta finció transforma la paraula a adivinar en _
function updateDisplay() {
     wordDisplay.textContent = selectedWord
        .split('')
        .map(letter => (guessedLetters.includes(letter.toLowerCase()) ? letter : '_')).join(' ');

    // Comprova si el usuari a adivinat la paraula
    if (!wordDisplay.textContent.includes('_')) {
        message.textContent = '¡Has guanyat! La paraula és: ' + selectedWord;
        speakWord(selectedWord); // Diu la paraula en angles
        guessButton.disabled = true;
        restartButton.style.display = 'block';
    }
}
//Funció per la veu en angles
function speakWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US'; 
    speechSynthesis.speak(utterance);
}
//Dibuixem el penjat amb codi canvas
function drawHangman() {
    ctx.clearRect(0, 0, hangmanCanvas.width, hangmanCanvas.height);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;

    if (wrongGuesses >= 1) { // Cap
        ctx.beginPath();
        ctx.arc(100, 30, 20, 0, Math.PI * 2, true);
        ctx.stroke();
    }
    if (wrongGuesses >= 2) { // Cos
        ctx.beginPath();
        ctx.moveTo(100, 50);
        ctx.lineTo(100, 130);
        ctx.stroke();
    }
    if (wrongGuesses >= 3) { // Braç esquerra
        ctx.beginPath();
        ctx.moveTo(100, 70);
        ctx.lineTo(60, 90);
        ctx.stroke();
    }
    if (wrongGuesses >= 4) { // Braç dret
        ctx.beginPath();
        ctx.moveTo(100, 70);
        ctx.lineTo(140, 90);
        ctx.stroke();
    }
    if (wrongGuesses >= 5) { // cama esquerra
        ctx.beginPath();
        ctx.moveTo(100, 130);
        ctx.lineTo(60, 180);
        ctx.stroke();
    }
    if (wrongGuesses >= 6) { // Cama dreta
        ctx.beginPath();
        ctx.moveTo(100, 130);
        ctx.lineTo(140, 180);
        ctx.stroke();
    }

    if (wrongGuesses >= maxTries) {
        message.textContent = `¡Has perdut! La paraula és: ${selectedWord}`;
        guessButton.disabled = true;
        restartButton.style.display = 'block';
    }
}

guessButton.addEventListener('click', () => {
    const letter = letterInput.value.toLowerCase();
    if (letter && !guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
       
        if (!selectedWord.toLowerCase().includes(letter)) {
            wrongGuesses++;
        }
        updateDisplay();
        drawHangman();
    }
    letterInput.value = '';
    letterInput.focus();
});

restartButton.addEventListener('click', () => {
    guessedLetters = [];
    wrongGuesses = 0;
    guessButton.disabled = false;
    message.textContent = "";
    startGame();
});

// Funció per quan l'usuari pulsi la tecla enter activa el boto de verificar
function handleKeyPress(event) {
    if (event.key === "Enter") { // Verifica la tecla pulsada
        document.getElementById("guessButton").click(); // Simula el clic en el boto
    }
}

// Afegeix el controlador de events per la tecla polsada
window.onload = function() {
    document.addEventListener("keypress", handleKeyPress);
}

startGame();