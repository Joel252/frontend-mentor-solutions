"use strict";

const containerForm = document.getElementById("container-form");
const containerMsj = document.getElementById("container-msj");
const ratings = document.querySelectorAll(".card__ratings--rating");
const btn = document.querySelector("button");
const ratingMsj = document.querySelector(".card__rating span");

ratings.forEach((element) => {
  element.addEventListener("click", () => {
    ratings.forEach((e) => {
      e.classList.remove("selected");
      if (e == element) {
        element.classList.add("selected");
      }
    });
  });
});

btn.addEventListener("click", () => {
  ratings.forEach((element) => {
    if (element.classList.contains("selected")) {
      containerForm.style.display = "none";
      containerMsj.style.display = "block";
      ratingMsj.innerHTML = element.innerHTML;
    }
  });
});
