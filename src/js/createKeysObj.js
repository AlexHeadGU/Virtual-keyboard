import './keys.js';

class Keys {
  constructor(code, symbol, secSymbol, ruSymbol, secRuSymbol, className) {
    this.code = code;
    this.symbol = symbol;
    this.secSymbol = secSymbol;
    this.ruSymbol = ruSymbol;
    this.secRuSymbol = secRuSymbol;
    this.className = className;
  }
}

// eslint-disable-next-line import/prefer-default-export
export const keys = [
  new Keys('Backquote', '`', '~', 'ё', 'Ё', 'key__symbol'),
  new Keys('Digit1', '1', '!', null, null, 'key__number'),
  new Keys('Digit2', '2', '@', null, null, 'key__number'),
  new Keys('Digit3', '3', '#', null, null, 'key__number'),
  new Keys('Digit4', '4', '$', null, null, 'key__number'),
  new Keys('Digit5', '5', '%', null, null, 'key__number'),
  new Keys('Digit6', '6', '^', null, null, 'key__number'),
  new Keys('Digit7', '7', '&', null, null, 'key__number'),
  new Keys('Digit8', '8', '*', null, null, 'key__number'),
  new Keys('Digit9', '9', '(', null, null, 'key__number'),
  new Keys('Digit0', '0', ')', null, null, 'key__number'),
  new Keys('Minus', '-', '_', null, null, 'key__number'),
  new Keys('Equal', '=', '+', null, null, 'key__number'),
  new Keys('Backspace', 'Backspace', null, null, null, 'key__manage'),
  new Keys('Tab', 'Tab', null, null, null, 'key__manage'),
  new Keys('KeyQ', 'q', 'Q', 'й', 'Й', 'key__symbol'),
  new Keys('KeyW', 'w', 'W', 'ц', 'Ц', 'key__symbol'),
  new Keys('KeyE', 'e', 'E', 'у', 'У', 'key__symbol'),
  new Keys('KeyR', 'r', 'R', 'к', 'К', 'key__symbol'),
  new Keys('KeyT', 't', 'T', 'е', 'Е', 'key__symbol'),
  new Keys('KeyY', 'y', 'Y', 'н', 'Н', 'key__symbol'),
  new Keys('KeyU', 'u', 'U', 'г', 'Г', 'key__symbol'),
  new Keys('KeyI', 'i', 'I', 'ш', 'Ш', 'key__symbol'),
  new Keys('KeyO', 'o', 'O', 'щ', 'Щ', 'key__symbol'),
  new Keys('KeyP', 'p', 'P', 'х', 'Х', 'key__symbol'),
  new Keys('BracketLeft', '[', '{', 'х', 'Х', 'key__symbol'),
  new Keys('BracketRight', ']', '}', 'ъ', 'Ъ', 'key__symbol'),
  new Keys('Backslash', '\\', '|', '\\', '/', 'key__symbol'),
  new Keys('Delete', 'DEL', null, null, null, 'key__manage'),
  new Keys('CapsLock', 'Caps Lock', null, null, null, 'key__manage'),
  new Keys('KeyA', 'a', 'A', 'ф', 'Ф', 'key__symbol'),
  new Keys('KeyS', 's', 'S', 'ы', 'Ы', 'key__symbol'),
  new Keys('KeyD', 'd', 'D', 'в', 'В', 'key__symbol'),
  new Keys('KeyF', 'f', 'F', 'а', 'А', 'key__symbol'),
  new Keys('KeyG', 'g', 'G', 'п', 'П', 'key__symbol'),
  new Keys('KeyH', 'h', 'H', 'р', 'Р', 'key__symbol'),
  new Keys('KeyJ', 'j', 'J', 'о', 'О', 'key__symbol'),
  new Keys('KeyK', 'k', 'K', 'л', 'Л', 'key__symbol'),
  new Keys('KeyL', 'l', 'L', 'д', 'Д', 'key__symbol'),
  new Keys('Semicolon', ';', ':', 'ж', 'Ж', 'key__symbol'),
  new Keys('Quote', '\'', '"', 'э', 'Э', 'key__symbol'),
  new Keys('Enter', 'Enter', null, null, null, 'key__manage'),
  new Keys('ShiftLeft', 'Shift', null, null, null, 'key__manage'),
  new Keys('KeyZ', 'z', 'Z', 'я', 'Я', 'key__symbol'),
  new Keys('KeyX', 'x', 'X', 'ч', 'Ч', 'key__symbol'),
  new Keys('KeyC', 'c', 'C', 'с', 'С', 'key__symbol'),
  new Keys('KeyV', 'v', 'V', 'м', 'М', 'key__symbol'),
  new Keys('KeyB', 'b', 'B', 'и', 'И', 'key__symbol'),
  new Keys('KeyN', 'n', 'N', 'т', 'Т', 'key__symbol'),
  new Keys('KeyM', 'm', 'M', 'ь', 'Ь', 'key__symbol'),
  new Keys('Comma', ',', '<', 'б', 'Б', 'key__symbol'),
  new Keys('Period', '.', '>', 'ю', 'Ю', 'key__symbol'),
  new Keys('Slash', '/', '?', '.', ',', 'key__symbol'),
  new Keys('ArrowUp', '&#9650;', null, null, null, 'key__manage'),
  new Keys('ShiftRight', 'Shift', null, null, null, 'key__manage'),
  new Keys('ControlLeft', 'Ctrl', null, null, null, 'key__manage'),
  new Keys('MetaLeft', 'Win', null, null, null, 'key__manage'),
  new Keys('AltLeft', 'Alt', null, null, null, 'key__manage'),
  new Keys('Space', ' ', null, null, null, 'key__manage'),
  new Keys('AltRight', 'Alt', null, null, null, 'key__manage'),
  new Keys('ControlRight', 'Ctrl', null, null, null, 'key__manage'),
  new Keys('ArrowLeft', '&#9668;', null, null, null, 'key__manage'),
  new Keys('ArrowDown', '&#9660;', null, null, null, 'key__manage'),
  new Keys('ArrowRight', '&#9658;', null, null, null, 'key__manage'),
];
