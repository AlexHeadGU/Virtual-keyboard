import './keys.js';

class Keys{
    constructor(code,  symbol, secSymbol, ruSymbol, secRuSymbol, className) {
        this.code = code;
        this.symbol = symbol;
        this.secSymbol = secSymbol;
        this.ruSymbol = ruSymbol;
        this.secRuSymbol = secRuSymbol;
        this.className = className;
    }
}

export let keys = [
    new Keys('Backquote', '`', '~', null, null, 'key__number'),
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
    new Keys('KeyQ', 'Q', 'q', 'й', 'Й', 'key__symbol'),
    new Keys('KeyW', 'W', 'w', 'ц', 'Ц', 'key__symbol'),
    new Keys('KeyE', 'E', 'e', 'у', 'У', 'key__symbol'),
    new Keys('KeyR', 'R', 'r', 'к', 'К', 'key__symbol'),
    new Keys('KeyT', 'T', 't', 'е', 'Е', 'key__symbol'),
    new Keys('KeyY', 'Y', 'y', 'н', 'Н', 'key__symbol'),
    new Keys('KeyU', 'U', 'u', 'г', 'Г', 'key__symbol'),
    new Keys('KeyI', 'I', 'i', 'ш', 'Ш', 'key__symbol'),
    new Keys('KeyO', 'O', 'o', 'щ', 'Щ', 'key__symbol'),
    new Keys('KeyP', 'P', 'p', 'х', 'Х', 'key__symbol'),
    new Keys('BracketLeft', '[', '{', 'х', 'Х', 'key__symbol'),
    new Keys('BracketRight', ']', '}', 'ъ', 'Ъ', 'key__symbol'),
    new Keys('Backslash', '\\', '|', '\\', '/', 'key__symbol'),
    new Keys('Delete', 'DEL', null, null, null, 'key__manage'),
    new Keys('CapsLock', 'Caps Lock', null, null, null, 'key__manage'),
    new Keys('KeyA', 'A', 'a', 'ф', 'Ф', 'key__symbol'),
    new Keys('KeyS', 'S', 's', 'ы', 'Ы', 'key__symbol'),
    new Keys('KeyD', 'D', 'd', 'в', 'В', 'key__symbol'),
    new Keys('KeyF', 'F', 'f', 'а', 'А', 'key__symbol'),
    new Keys('KeyG', 'G', 'g', 'п', 'П', 'key__symbol'),
    new Keys('KeyH', 'H', 'h', 'р', 'Р', 'key__symbol'),
    new Keys('KeyJ', 'J', 'j', 'о', 'О', 'key__symbol'),
    new Keys('KeyK', 'K', 'k', 'л', 'Л', 'key__symbol'),
    new Keys('KeyL', 'L', 'l', 'д', 'Д', 'key__symbol'),
    new Keys('Semicolon', ';', ':', 'ж', 'Ж', 'key__symbol'),
    new Keys('Quote', '\'', '"', 'э', 'Э', 'key__symbol'),
    new Keys('Enter', 'Enter', null, null, null, 'key__manage'),
    new Keys('ShiftLeft', 'Shift', null, null, null, 'key__manage'),
    new Keys('KeyZ', 'Z', 'z', 'я', 'Я', 'key__symbol'),
    new Keys('KeyX', 'X', 'x', 'ч', 'Ч', 'key__symbol'),
    new Keys('KeyC', 'C', 'c', 'с', 'С', 'key__symbol'),
    new Keys('KeyV', 'V', 'v', 'м', 'М', 'key__symbol'),
    new Keys('KeyB', 'B', 'b', 'и', 'И', 'key__symbol'),
    new Keys('KeyN', 'N', 'n', 'т', 'Т', 'key__symbol'),
    new Keys('KeyM', 'M', 'm', 'ь', 'Ь', 'key__symbol'),
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
    new Keys('ArrowRight', '&#9658;', null, null, null, 'key__manage')
  ];