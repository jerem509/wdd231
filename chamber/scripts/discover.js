const url = 'scripts/data/jeremiefunactivities.json';
const cardContainer = document.querySelector('#main-discover');

//create async function
async function showActivities() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.table(data);
        displayActivities(data);
    }
    catch (error) {
        console.error(error);
    }
}

// function to display the activities
const displayActivities = (activities) => {
    activities.forEach(activity => {
        // create card element
        const div = document.createElement('div');
        div.setAttribute('id', 'card');
        div.innerHTML = `<h2 id="card-title">${activity.name}</h2>
            <div id="card-pic-container"><img src=${activity.url} alt=${activity.name}></div>
            <p>${activity.description}</p>
            <span>${activity.address}</span>
            <button type="button" id="learn-more">Learn More</button>`;
        cardContainer.appendChild(div);
    });

};

showActivities();


// local storage
document.addEventListener("DOMContentLoaded", function () {
    // get the html element to work on to display the message
    const visits = document.getElementById("visits");
    //Get the value of the last day of visit if already set in the local storage OR set it to 0
    let visitDate = Number(window.localStorage.getItem("last-visit")) || 0;
    //Messages to show on the webpage depending on the last visit time
    if (visitDate !== 0) {
        const visitDatesDifference =
        (Date.now() - visitDate) / (24 * 60 * 60 * 1000);
        console.log(visitDatesDifference);
        if (visitDatesDifference < 1) {
        visits.textContent = `Back so soon! Awesome!`;
        } else {
        visits.textContent = `You last visited ${Math.floor(
            visitDatesDifference
        )} days ago.`;
        }
    } else {
        visits.textContent = `Welcome! Let us know if you have any questions.`;
    }
    //set the value of the last day of visit in the local storage at the end
    localStorage.setItem("last-visit", Date.now());
});

