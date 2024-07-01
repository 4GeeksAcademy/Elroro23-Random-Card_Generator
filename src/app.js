/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Las funciones se ejecutan al cargar la página (window.onload).
  const suits = ["♦", "♥", "♠", "♣"]; //Arrays de palos y números.
  const numbers = [
    //Arrays de números.
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  function cardRandomGen() {
    //Función para generar una carta random.
    const randomIndex = Math.floor(Math.random() * suits.length); //Generamos índices aleatorios
    const randomNumberIndex = Math.floor(Math.random() * numbers.length);

    const randomSuit = suits[randomIndex]; //Seleccionamos valores aleatorios.
    const randomNumbers = numbers[randomNumberIndex];

    let suitTop = document.querySelector("#suitTop"); //Seleccionamos elementos del DOM.
    suitTop.innerText = randomSuit; //Asignamos valores a los elementos del DOM.
    let suitButton = document.querySelector("#suitButton");
    suitButton.innerText = randomSuit;
    let number = document.querySelector("#number");
    number.innerText = randomNumbers;

    suitTop.classList.remove("red"); //// Eliminamos cualquier clase de color anterior.
    suitButton.classList.remove("red");

    if (randomSuit === "♥" || randomSuit === "♦") {
      //Condicional para aplicar clases(color rojo si es diamante o corazón).
      suitTop.classList.add("red");
      suitButton.classList.add("red");
    }
  }
  cardRandomGen(); //Se genera una carta aleatoria al cargar la página.

  document
    .querySelector("#randomCard") //Asignamos el evento al botón para cambiar la carta.
    .addEventListener("click", cardRandomGen);
};
