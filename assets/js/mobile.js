const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const menuClose1 = doc.querySelector(".close1");
const menuClose2 = doc.querySelector(".close2");
const menuClose3 = doc.querySelector(".close3");
const menuClose4 = doc.querySelector(".close4");
const menuClose5 = doc.querySelector(".close5");
const menuClose6 = doc.querySelector(".close6");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
menuClose1.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
menuClose2.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
menuClose3.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
menuClose5.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
menuClose4.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
<<<<<<< HEAD
=======
menuClose6.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
>>>>>>> 5ce4141c483b905342e0b894aeda7b5605d35216

