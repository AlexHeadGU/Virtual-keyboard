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
const switchDirectShift = () => {
  for (let j = 0; j < 64; j++) {
    if (keys[j].className === 'key__symbol' && keys[52].symbol === keyboard.children[52].innerText) {
      keyboard.children[j].innerHTML = keys[j].secSymbol;
    } else if (keys[j].className === 'key__symbol' && keys[52].secSymbol === keyboard.children[52].innerText) {
      keyboard.children[j].innerHTML = keys[j].symbol;
    } else if (keys[j].className === 'key__symbol' && keys[52].ruSymbol === keyboard.children[52].innerText) {
      keyboard.children[j].innerHTML = keys[j].secRuSymbol;
    } else if (keys[j].className === 'key__symbol' && keys[52].secRuSymbol === keyboard.children[52].innerText) {
      keyboard.children[j].innerHTML = keys[j].ruSymbol;
    }
    if (keys[j].className === 'key__number' && keys[12].symbol === keyboard.children[12].innerText) {
      keyboard.children[j].innerHTML = keys[j].secSymbol;
    } else if (keys[j].className === 'key__number' && keys[12].secSymbol === keyboard.children[12].innerText) {
      keyboard.children[j].innerHTML = keys[j].symbol;
    }
  }
};

const switchDirectCaps = () => {
  for (let j = 0; j < 64; j++) {
    if (keys[j].className === 'key__symbol' && keys[52].symbol === keyboard.children[52].innerText) {
      keyboard.children[j].innerHTML = keys[j].secSymbol;
    } else if (keys[j].className === 'key__symbol' && keys[52].secSymbol === keyboard.children[52].innerText) {
      keyboard.children[j].innerHTML = keys[j].symbol;
    } else if (keys[j].className === 'key__symbol' && keys[52].ruSymbol === keyboard.children[52].innerText) {
      keyboard.children[j].innerHTML = keys[j].secRuSymbol;
    } else if (keys[j].className === 'key__symbol' && keys[52].secRuSymbol === keyboard.children[52].innerText) {
      keyboard.children[j].innerHTML = keys[j].ruSymbol;
    }
  }
};

const switchLanguage = () => {
  for (let j = 0; j < 64; j++) {
    if (keys[j].className === 'key__symbol' && keys[52].symbol === keyboard.children[52].innerText) {
      keyboard.children[j].innerHTML = keys[j].ruSymbol;
    } else if (keys[j].className === 'key__symbol' && keys[52].secSymbol === keyboard.children[52].innerText) {
      keyboard.children[j].innerHTML = keys[j].secRuSymbol;
    } else if (keys[j].className === 'key__symbol' && keys[52].ruSymbol === keyboard.children[52].innerText) {
      keyboard.children[j].innerHTML = keys[j].symbol;
    } else if (keys[j].className === 'key__symbol' && keys[52].secRuSymbol === keyboard.children[52].innerText) {
      keyboard.children[j].innerHTML = keys[j].secSymbol;
    }
  }
};

const backspaceDelete = (shift) => {
  const str = textArea.value;
  const position = textArea.selectionStart - 1;
  if (textArea.selectionStart === textArea.selectionEnd) {
    textArea.value = `${str.substring(0, position + shift)}${str.substring(position + shift + 1)}`;
    textArea.selectionStart = position + shift;
    textArea.selectionEnd = textArea.selectionStart;
  } else {
    textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd, 'end');
  }
};

document.addEventListener('keydown', (event) => {
  for (let i = 0; i < 64; i++) {
    if (event.code === keys[i].code) {
      if (event.key === 'Shift' && !event.repeat) {
        switchDirectShift();
      } else if (event.key === 'Shift' && event.repeat) {
        break;
      } else if (event.key === 'CapsLock') {
        cl.classList.toggle('caps-is-on');
        switchDirectCaps();
      } else if (event.key === 'ArrowLeft') {
        if (textArea.selectionStart !== 0) {
          textArea.selectionEnd -= 1;
        }
      } else if (event.key === 'ArrowRight') {
        if (textArea.selectionStart !== textArea.value.length) {
          textArea.selectionStart += 1;
        }
      } else if (event.key === 'Backspace') {
        backspaceDelete(0);
      } else if (event.key === 'Delete') {
        backspaceDelete(1);
      } else if (event.key === 'Tab') {
        const position = textArea.selectionStart - 1;
        textArea.setRangeText('    ', textArea.selectionStart, textArea.selectionEnd, 'end');
        textArea.selectionStart = position + 5;
        textArea.selectionEnd = textArea.selectionStart;

        // textArea.value += '    ';
      } else if (event.key === 'Enter') {
        console.log('Enter');
      } else if (event.altKey && event.ctrlKey) {
        switchLanguage();
      } else if (!(event.key === 'Control' || event.key === 'Alt')) {
        textArea.value += keyboard.children[i].textContent;
      }
      keyboard.children[i].classList.add('press_key');
    }
  }
  event.preventDefault();
  textArea.focus();
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Shift') {
    switchDirectShift();
  }
  for (let i = 0; i < 64; i++) {
    if (event.code === keys[i].code) {
      event.preventDefault();
      keyboard.children[i].classList.remove('press_key');
    }
  }
});
