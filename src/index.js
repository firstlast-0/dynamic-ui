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
// let nav = document.querySelector('nav ul');
// nav.addEventListener('click', (event) => {
//     let nodeList = document.querySelectorAll('ul li');
//     let x = [...nodeList];
//     for (let item of x) {
//         item.classList.remove('selected');
//     }
    
//     let button = event.target;
//     button.classList.toggle('selected');
//     let content = document.querySelector('#content');

//     if (button.textContent === 'News') content.textContent = 'News Content';
//     else if (button.textContent === 'Videos') content.textContent = 'Videos Content';
//     else if (button.textContent === 'Photos') content.textContent = 'Photos Content';
//     else if (button.textContent === 'Chat') content.textContent = 'Chat Content';
// });


// Image slider
let left = document.querySelector('#left');
let right = document.querySelector('#right');
let slider = document.querySelector('#container div');

left.addEventListener('click', () => {
    let sliderStyle = getComputedStyle(slider);
    let rightValue = sliderStyle.getPropertyValue("right").replace("px", "");    
    if (rightValue === '15') slider.style.right = "735px";        
    else slider.style.right = (Number(rightValue) - 360) + "px";
    selectNavDot();    
});

right.addEventListener('click', () => {
    let sliderStyle = getComputedStyle(slider);
    let rightValue = sliderStyle.getPropertyValue("right").replace("px", "");
    if (rightValue === '735') slider.style.right = "15px";
    else slider.style.right = (Number(rightValue) + 360) + "px";
    selectNavDot();
});

let offset = 15;
let images = [...document.querySelectorAll('#container img')];
for (let i = 0; i < images.length; i++) {
    let navDots = document.querySelector('#navDots');
    let div = document.createElement('div');
    div.setAttribute('data-index', i);
    let offsetVal = offset + "px";
    div.addEventListener('click', () => {
        slider.style.right = offsetVal;

        // let divs = [...document.querySelectorAll('#navDots div')];
        // for (let item of divs) item.classList.remove('selected');        
        // div.classList.toggle('selected');
    });
    navDots.appendChild(div);
    offset += 360;
}

function selectNavDot() {
    let sliderStyle = getComputedStyle(slider);
    let divs = [...document.querySelectorAll('#navDots div')];
    for (let item of divs) item.classList.remove('selected');

    if (sliderStyle.getPropertyValue("right") === '15px') {
        let div = document.querySelector("div[data-index='0']");        
        div.classList.toggle('selected');
    } else if (sliderStyle.getPropertyValue("right") === '375px') {
        let div = document.querySelector("div[data-index='1']");
        div.classList.toggle('selected');
    } else if (sliderStyle.getPropertyValue("right") === '735px') {
        let div = document.querySelector("div[data-index='2']");
        div.classList.toggle('selected');
    }
}
selectNavDot();