//================= NAVIGATION =====================
const navigation = document.querySelector('#navbar');
const hamburgerMenu = document.querySelector('#hamburger-button');

// Assign an additional class to navigation bar and one to hamburger 
// menu when hamburger menu is clicked on.
hamburgerMenu.addEventListener('click', () =>
{
    hamburgerMenu.classList.toggle('show');
    navigation.classList.toggle('show');
});

const li = document.querySelectorAll('li');
li.forEach(element => {
    element.addEventListener('click', () => {
        li.forEach(elt => elt.classList.remove('current'));
        element.classList.add('current');
    });
});

//================= DATES =====================
// use the date object
const today = new Date();
//grab the current year id
const currentYear = document.getElementById('currentyear');
//show the current year value on the page
currentYear.textContent = `${today.getFullYear()}`;
//get the lastModified id from the html
const dateOfModification = document.getElementById('lastModified');
//insert date of modification within the element
dateOfModification.textContent = `${new Intl.DateTimeFormat(
    "en-UK",
    {
        dateStyle: "full"
    }
).format(today)}`;