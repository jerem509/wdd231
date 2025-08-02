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

document.addEventListener('DOMContentLoaded', () => {
    const infoContainer = document.querySelector("#info-container");
    if (infoContainer) {
        const params = new URLSearchParams(window.location.search);
        const firstName = params.get('firstName');
        const lastName = params.get('lastName');
        const email = params.get('email');
        const phoneNumber = params.get('phone');
        const businessName = params.get('businessname');
        const businessTitle = params.get("businesstitle");
        const businessdesc = params.get("business-description");
        const timestamp = params.get('timestamp');

        infoContainer.innerHTML = `<p><strong>First Name</strong>: ${firstName};</p>
            <p><strong>Last Name</strong>: ${lastName};</p>
            <p><strong>Email</strong>: ${email};</p>
            <p><strong>Mobile Number</strong>: ${phoneNumber};</p>
            <p><strong>Business Name</strong>: ${businessName};</p>
            <p><strong>Business Title</strong>: ${businessTitle};</p>
            <p><strong>Business Description</strong>: ${businessdesc}</p>
            <p><strong>Current Date Timestamp</strong>: ${timestamp}</p>`;
    };
});
