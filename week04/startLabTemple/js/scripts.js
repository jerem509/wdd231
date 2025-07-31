import { temples } from '../data/temples.js';
console.log(temples);

import { url } from '../data/temples.js';
console.log(url);

const showhere = document.querySelector('#showHere');
const mydialog = document.querySelector('#mydialog');
const mytitle = document.querySelector('#mydialog h2');
const myinfo = document.querySelector('#mydialog p');
const myclose = document.querySelector('#mydialog button');
myclose.addEventListener('click', () => mydialog.close());

function displayItems(data) {
    
    data.forEach(element => {
        console.log(element);
        const photo = document.createElement('img');
        photo.src = `${url}${element.path}`;
        photo.alt = element.name;

        photo.addEventListener('click', () => showStuff(element));
        

        showhere.appendChild(photo);
    });
}

function showStuff(item) {
    mytitle.innerHTML = item.name;
    myinfo.innerHTML = `Dedicated on ${item.dedicated} by ${item.person} as temple #${item.number}`;
    mydialog.showModal();
}

displayItems(temples);