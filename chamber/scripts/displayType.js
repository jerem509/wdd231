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