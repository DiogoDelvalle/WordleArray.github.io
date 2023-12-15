let intentos = 6;
const button = document.getElementById('guess-button');
const input = document.getElementById("guess-input");
const valor = input.value;
const UrlApi= "https://random-word-api.herokuapp.com/word?length=5";

fetch(UrlApi).then(Response=>Response.json())
    .then(Response=>{
        PALABRA=Response[0].toUpperCase();
    })
.catch(err=>{
  let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH']
    const PALABRA= diccionario[Math.floor(Math.random()*diccionario.length)].toUpperCase();
})

button.addEventListener("click", intentar);

function intentar() {
  const INTENTO = leerIntento();
  const GRID = document.getElementById("grid");
  const ROW = document.createElement('div');
  ROW.className = 'row';

  if(INTENTO===palabra){
    terminar("<h1>Ganaste :)</h1>");
  }
  for (let i in palabra) {
    const SPAN = document.createElement('span');
    SPAN.className = 'letter';
    if (INTENTO[i] === palabra[i]) { //VERDE
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = 'green';
    } else if (palabra.includes(INTENTO[i])) { //AMARILLO
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = 'yellow';
    } else {      //GRIS
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = 'grey';
    }
    ROW.appendChild(SPAN)
  }
  intentos--;
  if (intentos == 0) {
    terminar("<h1>Perdiste :(</h1>")
  }
  GRID.appendChild(ROW)
}

function leerIntento() {
  let intento = document.getElementById("guess-input");
  intento = intento.value;
  intento = intento.toUpperCase();
  return intento;
}

function terminar(mensaje) {
  const INPUT = document.getElementById("guess-input");
  INPUT.disabled = true;
  button.disabled = true;
  let contenedor = document.getElementById('guesses');
  contenedor.innerHTML = mensaje;
}