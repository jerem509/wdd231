const radio = document.querySelectorAll('input[type="radio"]');
console.log(radio);
const memberCards = document.querySelector('div#membership-cards');
radio.forEach(element => {
    element.addEventListener("click", () => {
      memberCards.style.animation = "cards-container 7s ease-in 1s 1 forwards";
    });
});