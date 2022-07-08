import './sass/main.scss';
import {keys} from './js/createKeysObj.js';
// import tesla from './assets/hb.jpeg'

// const mainImage = document.getElementById("mainImage")
// mainImage.src = tesla

// const hello = require('./js/hello')


//Отрисовка страницы
let array = [];
let section = document.createElement('section');
let wrapper = document.createElement('div');
let title = document.createElement('h1');
let textArea = document.createElement('textarea');
let keyboard = document.createElement('div');
let instruction = document.createElement('div');

section.className = 'main';
wrapper.className = 'wrapper';
keyboard.className = 'keyboard';

title.innerHTML = 'Виртуальная клавиатура RS school';
textArea.placeholder = 'Здесь будет отображаться введенный текст';
instruction.innerHTML = 'Клавиатура создавалась на операционной системе Windows CTRL + ALT для переключения раскладки';

document.body.append(section);
section.append(wrapper);
wrapper.append(title);
wrapper.append(textArea);
wrapper.append(keyboard);
wrapper.append(instruction);

for(let i = 0; i < 64; i++){
    let key = document.createElement('div');
    key.classList.add('key', keys[i].className);
    console.log(keys[i].symbol);
    key.innerHTML = keys[i].symbol;
    keyboard.append(key);
}

let bs = keyboard.children[13];
let tab = keyboard.children[14];
let del = keyboard.children[28];
let cl = keyboard.children[29];
let enter = keyboard.children[41];
let shiftLeft = keyboard.children[42];
let shiftRight = keyboard.children[54];
let ctrlLeft = keyboard.children[55];
let sp = keyboard.children[58];
let ctrlRight = keyboard.children[60];

bs.style.width = '124px';
tab.style.width = '63px';
del.style.width = '50px';
cl.style.width = '135px';
enter.style.width = '100px';
shiftLeft.style.width = '185px';
shiftRight.style.width = '50px';
ctrlLeft.style.width = '80px';
sp.style.width = '369px';
ctrlRight.style.width = '80px';
