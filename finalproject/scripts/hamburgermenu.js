//================= NAVIGATION =====================
const navigation = document.querySelector("#navbar");
const hamburgerMenu = document.querySelector("#hamburger-menu");

// Assign an additional class to navigation bar and one to hamburger
// menu when hamburger menu is clicked on.
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("show");
  navigation.classList.toggle("show");
});

const li = document.querySelectorAll("li");
li.forEach((element) => {
  element.addEventListener("click", () => {
    li.forEach((elt) => elt.classList.remove("current"));
    element.classList.add("current");
  });
});
