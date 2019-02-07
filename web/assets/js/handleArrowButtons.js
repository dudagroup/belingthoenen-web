// show/hide arrows on mouse-enter/-leave of carousel

let carousel = document.querySelector('.carousel');
let mouse_arrows = document.querySelectorAll('.flickity-prev-next-button');

carousel.addEventListener('mouseover', showArrows);
carousel.addEventListener('mouseleave', hideArrows);
hideArrows(); // hide arrows at first;

function hideArrows() {
  for (arrow of mouse_arrows) {
    arrow.classList.add('hidden');
  }
}

function showArrows() {
  for (arrow of mouse_arrows) {
    arrow.classList.remove('hidden');
  }
}
