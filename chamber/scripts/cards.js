const url = "scripts/data/members.json"
const cards = document.querySelector('#cards');

async function showMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data);
    }
    catch (error) {
        console.error(error);
    }
}

const displayMembers = (members) => {
    const selectedMembers = selectMembers(members); //select members
    selectedMembers.forEach(member => {
        //--------------------- card container -------------------------
        const div = document.createElement('div');

        //---------- card top part --------------
        const topDiv = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.innerHTML = `${member.name}`;
        const span = document.createElement('span');
        span.innerHTML = `${member.slogan}`;
        topDiv.append(h2, span);
        
        //-------- card bottom part --------------
        const bottomDiv = document.createElement('div');
        //create and append img in left part
        const img = document.createElement('img');
        img.setAttribute('src', member.imageName);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('alt', `a logo of ${member.name}`);
        img.setAttribute('class', 'memberImage');
        const leftDiv = document.createElement('div');
        leftDiv.appendChild(img);
        //other info in right part
        const email = document.createElement('p');
        email.innerHTML = `<span id='email'>Email</span>: ${member.email}`;
        const phone = document.createElement('p');
        phone.innerHTML = `<span id='phone'>Phone</span>: ${member.phoneNumber}`
        const url = document.createElement('p');
        url.innerHTML = `<span id='url'>URL</span>: ${member.website}`;
        const rightDiv = document.createElement('div');
        rightDiv.append(email, phone, url);
        //append left and right parts of bottom section
        bottomDiv.append(leftDiv, rightDiv);

        div.classList.add('card');
        div.append(topDiv, bottomDiv);

        cards.appendChild(div);
    });
}

function selectMembers(arr) {
    const filteredData = arr.filter(element => element.membershipLevel > 1);
    if (filteredData.length < 3) {
        return filteredData;
    }
    else {
        const selectedMembers = new Array(3);
        const arrIndexes = Array.from({ length: filteredData.length }, (_, i) => i);
        let len = arrIndexes.length;
        let i = 0;
        while (i < 3) {
            const randomNum = Math.floor(Math.random() * arrIndexes.length);
            const randomIndex = arrIndexes[randomNum];
            if (arrIndexes.includes(randomIndex)) {
                selectedMembers.push(filteredData[randomIndex]);
                arrIndexes.splice(randomIndex, 1);
                len = len - 1;
                i++;
            }
        }
        
        return selectedMembers;
    }
    
}

showMembers();
