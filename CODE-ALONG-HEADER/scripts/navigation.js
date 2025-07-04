//get the navigation hamburger button
const navbutton = document.querySelector('#ham-btn');

//toggle the show class off and on
navbutton.addEventListener('click', () =>
{
    navbutton.classList.toggle('show');
    navBar.classList.toggle('show');
})

//select the nav element
const navBar = document.querySelector('#nav-bar');

//get today date;
const today = new Date();
//grab year created in html
const yearCreated = document.querySelector('#year-created');
//insert value in html year-created
yearCreated.textContent = `${today.getFullYear()}`;
//insert the time of modification
const dateOfModification = document.querySelector('#date-modified');
dateOfModification.textContent = `${today}`;
dateOfModification.style.color = '#3D4058';
dateOfModification.style.fontSize = '.9rem';
