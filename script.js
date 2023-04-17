"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openmodal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//closemodal function
const closemodal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openmodal);

//Close Modal
btnCloseModal.addEventListener("click", closemodal);
overlay.addEventListener("click", closemodal);
