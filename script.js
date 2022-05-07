const body = document.getElementById('body');
const textarea = document.createElement('textarea');
textarea.setAttribute('autofocus', 'autofocus');
const keysContainer = document.createElement('div');
keysContainer.className = 'keys-container';

body.appendChild(textarea);
body.appendChild(keysContainer);

body.insertAdjacentHTML('beforeend', '<p class="instruction">Переключение языка ввода виртуальной клавиатуры происходит одновременным нажатием клавиш LeftShift и LeftCtrl на физической клавиатуре. Клавиатура была сделана в системе Windows 10.</p>');

function disable() { document.onkeydown = () => false; } disable();

const engListDef = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del'],
  ['Caps</br>Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9652', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '&#9666', '&#9662', '&#9656'],
];

const engListUp = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Del',
  'Caps</br>Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9652', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '&#9666', '&#9662', '&#9656',
];

const rusListDef = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Del',
  'Caps</br>Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9652', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '&#9666', '&#9662', '&#9656',
];

const rusListUp = [
  'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Del',
  'Caps</br>Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '/', 'Enter',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&#9652', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '&#9666', '&#9662', '&#9656',
];

const keysList = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete',
  'Caps</br>Lock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
];

const oneDimensionalList = [];

for (let j = 0; j < engListDef.length; j += 1) {
  const row = document.createElement('div');
  row.classList.add('keybord-row');
  keysContainer.append(row);

  for (let i = 0; i < engListDef[j].length; i += 1) {
    const key = document.createElement('li');
    key.classList.add('key');
    row.append(key);
    oneDimensionalList.push(engListDef[j][i]);
  }
}