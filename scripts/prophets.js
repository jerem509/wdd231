const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

//create async function
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const dateOfBirth = document.createElement('span');
        dateOfBirth.style.display = 'block';
        dateOfBirth.textContent = `Date of birth: ${prophet.birthdate}`;
        const placeOfBirth = document.createElement('span');
        placeOfBirth.textContent = `Place of birth: ${prophet.birthplace}`;
        placeOfBirth.style.display = 'block';

        const portrait = document.createElement('img');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `portrait of ${fullName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '250px');
        portrait.setAttribute('height', 'auto');

        card.appendChild(fullName);
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(portrait);
        cards.appendChild(card);

    });
}

getProphetData();