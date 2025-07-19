const url = "scripts/data/members.json"
const directory = document.querySelector('#directory');

//create async function
async function showMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.table(data);
        displayMembers(data);
    }
    catch (error) {
        console.error(error);
    }
}

const displayMembers = (members) => {
    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('card');
        directory.appendChild(card);

        //create and append img
        const img = document.createElement('img');
        img.setAttribute('src', member.imageName);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('alt', `a logo of ${member.name}`);
        img.setAttribute('class', 'memberImage');
        card.appendChild(img);
        //create and append p element
        const p = document.createElement('p');
        p.textContent = member.name;
        card.appendChild(p);
        //create and append line of address paragraph
        const span1 = document.createElement('span');
        span1.textContent = member.address;
        card.appendChild(span1);
        //create and append line of phone number
        const span2 = document.createElement('span');
        span2.textContent = member.phoneNumber;
        card.appendChild(span2);
        //create and append line of website url
        const aLink = document.createElement('a');
        aLink.setAttribute('href', member.website);
        aLink.setAttribute('target', '_blank');
        aLink.textContent = member.website;
        card.appendChild(aLink);
    })
}

showMembers();


const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const directorySel = document.querySelector('#directory');

//change the display type on click of the grid button
gridButton.addEventListener('click', () => {
    directorySel.classList.remove('list');
    directorySel.classList.add('grid');
});

//change the display type on click of the list button
listButton.addEventListener('click', () => {
    directorySel.classList.remove('grid');
    directorySel.classList.add('list');
});