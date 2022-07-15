import './sass/main.scss';
import { keys } from './js/createKeysObj';

// Отрисовка страницы
const section = document.createElement('section');
const wrapper = document.createElement('div');
const title = document.createElement('h1');
const textArea = document.createElement('textarea');
const keyboard = document.createElement('div');
const instruction = document.createElement('div');

section.className = 'main';
wrapper.className = 'wrapper';
keyboard.className = 'keyboard';

title.innerHTML = 'Виртуальная клавиатура RS school';
textArea.placeholder = 'Здесь будет отображаться введенный текст';
textArea.classList.add('text_area');
instruction.innerHTML = 'Клавиатура создавалась на операционной системе Windows CTRL + ALT для переключения раскладки';

document.body.append(section);
section.append(wrapper);
wrapper.append(title);
wrapper.append(textArea);
wrapper.append(keyboard);
wrapper.append(instruction);

for (let i = 0; i < 64; i++) {
  const key = document.createElement('div');
  const div = document.createElement('div');
  key.classList.add('key', keys[i].className);
  keyboard.append(key);
  key.append(div);
  div.classList.add('symbol');
  div.innerHTML = keys[i].symbol;
}

const bs = keyboard.children[13];
const tab = keyboard.children[14];
// const del = keyboard.children[28];
const cl = keyboard.children[29];
const enter = keyboard.children[41];
const shiftLeft = keyboard.children[42];
// const shiftRight = keyboard.children[54];
const ctrlLeft = keyboard.children[55];
const sp = keyboard.children[58];
const ctrlRight = keyboard.children[60];

bs.style.width = '124px';
tab.style.width = '63px';
cl.style.width = '135px';
enter.style.width = '100px';
shiftLeft.style.width = '185px';
ctrlLeft.style.width = '80px';
sp.style.width = '369px';
ctrlRight.style.width = '80px';

// Функционал кнопок
let inputKeys = '';
// let keyboardLayout;
// const symbols = document.querySelectorAll('.key__symbol');

document.addEventListener('keydown', (event) => {
  if (event.shiftKey) {
    if (!event.repeat) {
      console.log('Shift');
    } else {
      console.log('rep - Shift');
    }
  }
  for (let i = 0; i < 64; i++) {
    if (event.code === keys[i].code) {
      // shift
      // for (let j = 0; j < 64; j++) {
      //   const key = keyboard.children[j];
      //   if (keys[j].className !== 'key__manage' && keys[0].symbol === keyboard.firstChild.innerText) {
      //     key.innerHTML = keys[j].secSymbol;
      //   } else if (keys[j].className !== 'key__manage' && keys[0].secSymbol === keyboard.firstChild.innerText) {
      //     key.innerHTML = keys[j].symbol;
      //   }
      // }
      if (event.key === 'CapsLock') {
        console.log('CapsLock');
        // cl.classList.toggle('caps-is-on');
        // for (let j = 0; j < 64; j++) {
        //   const key = keyboard.children[j];
        //   if (keys[j].className !== 'key__manage') {
        //     key.innerHTML = keys[j].secSymbol;
        //   }
        // }
      } else if (event.key === 'Alt' || event.key === 'Control') {
        console.log('Alt or Ctrl');
      } else if (event.key === 'Delete') {
        console.log('Delete');
      } else if (event.key === 'Backspace') {
        // inputKeys = '';
        // for (let k = 0; k < inputKeys.length; k++) {
        //   inputKeys += k;
        // }
        // textArea.innerHTML = inputKeys;
        console.log('Backspace');
      } else if (event.key === 'Tab') {
        console.log('Tab');
      } else if (event.key === 'Enter') {
        console.log('Enter');
      } else {
        inputKeys += keys[i].symbol;
        textArea.innerHTML = inputKeys;
      }
      event.preventDefault();
      textArea.focus();
      keyboard.children[i].classList.add('press_key');
    }
  }
});

document.addEventListener('keyup', (event) => {
  for (let i = 0; i < 64; i++) {
    if (event.code === keys[i].code) {
      if (event.key === 'Shift') {
        // for (let j = 0; j < 64; j++) {
        //   const key = keyboard.children[j];
        //   key.innerHTML = keys[j].symbol;
        // }
      }
      event.preventDefault();
      keyboard.children[i].classList.remove('press_key');
    }
  }
});
