// use the date object
const today = new Date();
//grab the current year id
const currentYear = document.getElementById("currentyear");
//show the current year value on the page
currentYear.textContent = `${today.getFullYear()}`;
//get the lastModified id from the html
const dateOfModification = document.getElementById("lastModified");
//insert date of modification within the element
dateOfModification.textContent = `${new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(today)}`;
