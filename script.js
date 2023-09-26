const daysElement = document.getElementById('dias');
const hoursElement = document.getElementById('horas');
const minsElement = document.getElementById('minutos');
const secondsElement = document.getElementById('segundos');
const upcomingImg = document.getElementById('upcoming-img');
const veranoImg = document.getElementById('verano-img');
const inviernoImg = document.getElementById('invierno-img');
const otonhoImg = document.getElementById('otonho-img');
const primaveraImg = document.getElementById('primavera-img');
const body = document.getElementsByTagName('body')[0];
const contador = document.getElementById('contador');
const h1 = document.getElementById('cum');
const felicidades = document.getElementById('felicidades');

//DECLARAMOS LAS FECHAS
let currentDate = new Date();
let goalDate = new Date(2024, 0, 2, 0, 0); // Año, mes (enero==0), día, hora, minutos¡
let inviernoDate = new Date(2023, 11, 27, 0, 0);
let otoñoDate = new Date(2023, 8, 27, 0, 0);
let veranoDate = new Date(2024, 4, 27, 0, 0); 
let primaveraDate = new Date(2024, 2, 27, 0, 0); 
let days, hours, mins, seconds, totalSeconds;

//Crea un intervalo que llama a la función cada segundo
let countdownInterval = setInterval(countdown, 1000);
countdown();

function countdown() {
  currentDate = new Date();
  totalSeconds = (goalDate - currentDate) / 1000;

  // Condición para comprobar si ha llegado la hora establecida
  if (Math.floor(totalSeconds) <= 0) {
    showProduct();
    secondsElement.innerHTML = 0;
  }

  days = Math.floor(totalSeconds / 3600 / 24);
  hours = Math.floor(totalSeconds / 3600) % 24;
  mins = Math.floor(totalSeconds / 60) % 60;
  seconds = Math.floor(totalSeconds) % 60;

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minsElement.innerHTML = mins;
  secondsElement.innerHTML = seconds;

  if (currentDate >= otoñoDate && currentDate <= inviernoDate){
    body.className = "mostrarOtonho";
} else if(currentDate >= inviernoDate && currentDate <= primaveraDate) {
    body.className = "mostrarInvierno";
} else if(currentDate >= primaveraDate && currentDate <= veranoDate) {
    body.className = "mostrarPrimavera";
} else {
    body.className = "mostrarVerano";
}

};

function showProduct() {
  upcomingImg.classList.remove('nocolor-img');

  clearInterval(countdownInterval);

  countdown.className = "oculto";
  h1.className = "oculto";
  contador.className = "oculto";
  felicidades.classList.remove('oculto');
}
