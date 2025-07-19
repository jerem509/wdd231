const url = "scripts/data/members.json"
const directory = document.querySelector('#directory');

//create async function
async function showMembers() {

    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    displayMembers(data);
}

const displayMembers = (members) => {
    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('card');
        directory.appendChild(card);

        //create and append img
        const img = document.createElement('img');
        img.setAttribute('src', member.imageName);
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