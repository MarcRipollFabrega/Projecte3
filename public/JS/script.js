/********************************************************************************************************* */
/* SCRIPT PER CONTROLAR LES FUNCIONS DE LA PORTADA */
/********************************************************************************************************* */
// Funció per redirigir a la nova pagina despres d'un minut
    setTimeout(function() {
    document.getElementById('image').style.opacity = '0'; // La imatge desapareix
    setTimeout(function() {
          window.location.href = 'public/login.html'; // Carrega la paginia d'inici de sessió
    }, 1000); // 1 segon
}, 5000);  // 5 segons
// Barra de progess
const progressBar = document.getElementById('progress');
    let width = 0;
    const totalTime = 4000; // 5 seguns
    const interval = 100; 
    const increment = (interval / totalTime) * 100; 

    const intervalId = setInterval(() => {
        if (width >= 100) {
            clearInterval(intervalId);
        } else {
            width += increment;
            progressBar.style.width = width + '%';
        }
    }, interval);

/*****************************************************************************************************/
//FORMULARI DE REGISTRE
/*****************************************************************************************************/
document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const message = await response.text();
    document.getElementById('registerMessage').innerText = message;
// Redirigir si el registre va ser correcte
if (response.ok) {
    setTimeout(function () {
        window.location.href = "PaginaPrincipal.html"; 
      }, 3000);
}

});
/*****************************************************************************************************/
//FORMULARI DE LOGUIN
/*****************************************************************************************************/
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const message = await response.text();
    document.getElementById('loginMessage').innerText = message;
    if (response.ok) {
        setTimeout(function () {
            window.location.href = "PaginaPrincipal.html"; 
          }, 3000);
    }
});


/***************************************************************/
/******Finestra flotant Pagina Guardar*************************/
/****************************************************************/
// Rep el modal
var modal = document.getElementById("modal");

// Comprova si s'ha pulsat el boto del modal
var btn = document.getElementById("openModal");

//Element <spam> que tancar el modal
var span = document.getElementById("closeModal");

// funció per quan l'usuari fa clic al boto del modal
btn.onclick = function() {
    modal.style.display = "block";
}
// Tancar el modal si l'usuari fa clic a <span> (x)
span.onclick = function() {
    modal.style.display = "none";
}
// Si l'usuari fa clic en qualsevol part fora del modal, tancar el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





/***************************************************************/
/******codi per sortir de l'aplicació*************************/
/****************************************************************/
function sortir(){
    alert("Fins la proxima");
    window.location.href = "login.html";
}
/***************************************************************/
/******codi per tornar a l'aplicació*************************/
/****************************************************************/
function inici(){
    
    window.location.href = "PaginaPrincipal.html";
}
/***************************************************************/
/******codi per sortir de l'aplicació*************************/
/****************************************************************/
function guardar(){
    window.location.href = "Guardar.html";
}
/***************************************************************/
/******codi per practicar amb el penjat*************************/
/****************************************************************/
function penjat(){
    window.location.href = "Elpenjat.html";
}

/***************************************************************/
/******codi per practicar amnb el memorama******************/
/****************************************************************/
function memorama(){
    window.location.href = "memorama.html";
}

