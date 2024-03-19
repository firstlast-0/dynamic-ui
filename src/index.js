import "./style.css";

// Drop down menu
// function dropDownMenu(menu, items) {
//     menu.addEventListener('click', () => {
//         items.classList.toggle('clicked');
//     });
// }

// dropDownMenu(document.querySelector('#menu'), document.querySelector('#items'));
// dropDownMenu(document.querySelector('#menu2'), document.querySelector('#items2'));


// Mobile menu
let nav = document.querySelector('nav ul');
nav.addEventListener('click', (event) => {
    let nodeList = document.querySelectorAll('ul li');
    let x = [...nodeList];
    for (let item of x) {
        item.classList.remove('selected');
    }
    
    let button = event.target;
    button.classList.toggle('selected');
    let content = document.querySelector('#content');

    if (button.textContent === 'News') content.textContent = 'News Content';
    else if (button.textContent === 'Videos') content.textContent = 'Videos Content';
    else if (button.textContent === 'Photos') content.textContent = 'Photos Content';
    else if (button.textContent === 'Chat') content.textContent = 'Chat Content';
});

