"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  document.querySelector("button").addEventListener("click", buttonClick);
}

function buttonClick() {
  console.log("buttonClick");
  const input = document.querySelector("#input");
  const output = document.querySelector("#output");
  let inputValue = input.value;

  const option = document.querySelector("#options").value;

  if (option === "0") {
    console.log("option");
    const option0 =
      inputValue.substring(0, 1).toUpperCase() + inputValue.substring(1);
    output.value = option0;
  } else if (option === "1") {
    console.log("option");
    const option1 = inputValue.substring(0, inputValue.indexOf(" "));
    output.value = option1;
  } else if (option === "2") {
    console.log("option");
    const option2 = inputValue.substring(0, inputValue.indexOf(" "));
    const option2Len = option2.length;
    output.value = option2Len;
  } else if (option === "3") {
    console.log("option");
    const option3 = inputValue.substring(
      inputValue.indexOf(" ") + 1,
      inputValue.lastIndexOf(" ")
    );
    output.value = option3;
  } else if (option === "4") {
    console.log("option");
    const option4 = inputValue.endsWith(".jpg") || inputValue.endsWith(".png");
    output.value = option4;
  } else if (option === "5") {
    console.log("option");
    const option5 = inputValue.length;
    const option51 = "*".repeat(option5);
    output.value = option51;
  } else if (option === "6") {
    const option6 =
      inputValue.substring(0, 2).toLowerCase() +
      inputValue[2].toUpperCase() +
      inputValue.substring(3).toLowerCase();
    output.value = option6;
  } else if (option === "7") {
    console.log(option);
  }
}
