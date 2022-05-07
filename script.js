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

const allKeys = document.querySelectorAll('li');

function valuesKeys(value) {
  for (let i = 0; i < allKeys.length; i += 1) {
    allKeys[i].innerHTML = value[i];
  }
}

let lang;
let languageStorage;
let language = JSON.parse(localStorage.getItem(lang));

if (!language) {
  valuesKeys(oneDimensionalList);
} else {
  valuesKeys(language);
}

const backspace = allKeys[13];
const tab = allKeys[14];
const del = allKeys[27];
const capsLock = allKeys[28];
const enter = allKeys[41];
const shiftLeft = allKeys[42];
const arrUp = allKeys[53];
const shiftRight = allKeys[54];
const ctrlLeft = allKeys[55];
const win = allKeys[56];
const altLeft = allKeys[57];
const space = allKeys[58];
const altRight = allKeys[59];
const ctrlRight = allKeys[60];
const arrLeft = allKeys[61];
const arrRight = allKeys[63];
const arrDown = allKeys[62];

backspace.classList.add('backspace');
backspace.classList.add('functional');
tab.classList.add('tab');
tab.classList.add('functional');
del.classList.add('delete');
del.classList.add('functional');
capsLock.classList.add('capsLock');
capsLock.classList.add('functional');
enter.classList.add('enter');
enter.classList.add('functional');
shiftLeft.classList.add('shiftLeft');
shiftLeft.classList.add('functional');
arrUp.classList.add('arrow');
arrUp.classList.add('arrowUp');
arrUp.classList.add('functional');
shiftRight.classList.add('shiftRight');
shiftRight.classList.add('functional');
ctrlLeft.classList.add('ctrlLeft');
ctrlLeft.classList.add('functional');
win.classList.add('metaLeft');
win.classList.add('functional');
altLeft.classList.add('altLeft');
altLeft.classList.add('functional');
space.classList.add('space');
altRight.classList.add('altRight');
altRight.classList.add('functional');
ctrlRight.classList.add('ctrlRight');
ctrlRight.classList.add('functional');
arrLeft.classList.add('arrow');
arrLeft.classList.add('arrowLeft');
arrLeft.classList.add('functional');
arrRight.classList.add('arrow');
arrRight.classList.add('arrowRight');
arrRight.classList.add('functional');
arrDown.classList.add('arrow');
arrDown.classList.add('arrowDown');
arrDown.classList.add('functional');

document.addEventListener('keydown', (event) => {
  let cursorPosition = textarea.selectionStart;
  let cursorPositionEnd = textarea.selectionEnd;
  const beforeText = textarea.value.slice(0, cursorPosition);
  const afterText = textarea.value.slice(cursorPosition);

  for (let i = 0; i < allKeys.length; i += 1) {
    if (event.code === keysList[i]) {
      allKeys[i].classList.add('keystroke');

      if (allKeys[i].classList.contains('functional') === false
        && allKeys[i].classList.contains('key')) {
        textarea.value += allKeys[i].textContent;
        cursorPosition += 1;
      }

      if (allKeys[i].classList.contains('enter')) {
        textarea.value = `${beforeText}\n${afterText}`;
        cursorPosition += 1;
      }

      if (allKeys[i].classList.contains('tab')) {
        textarea.value = `${beforeText}\t${afterText}`;
        cursorPosition += 1;
      }

      if (allKeys[i].classList.contains('arrowUp')) {
        textarea.value = `${beforeText}\u2191${afterText}`;
        cursorPosition += 1;
      }

      if (allKeys[i].classList.contains('arrowDown')) {
        textarea.value = `${beforeText}\u2193${afterText}`;
        cursorPosition += 1;
      }

      if (allKeys[i].classList.contains('arrowLeft')) {
        textarea.value = `${beforeText}\u2190${afterText}`;
        cursorPosition += 1;
      }

      if (allKeys[i].classList.contains('arrowRight')) {
        textarea.value = `${beforeText}\u2192${afterText}`;
        cursorPosition += 1;
      }

      if (allKeys[i].classList.contains('backspace')) {
        if (cursorPositionEnd > cursorPosition) {
          textarea.value = textarea.value.slice(0, cursorPosition)
            + textarea.value.slice(cursorPositionEnd);
        } else {
          textarea.value = beforeText.slice(0, -1) + afterText;
          cursorPosition = cursorPosition > 0 ? cursorPosition - 1 : 0;
        }
      }

      if (allKeys[i].classList.contains('delete')) {
        if (cursorPositionEnd >= cursorPosition) {
          cursorPositionEnd += 1;
          textarea.setRangeText('', cursorPosition, cursorPositionEnd, 'preserve');
        }
      }
      break;
    }
  }

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (allKeys[0].innerHTML === '`') {
      valuesKeys(engListUp);
    }
    if (allKeys[0].innerHTML === 'ё') {
      valuesKeys(rusListUp);
    }
  }
});

document.addEventListener('keyup', (event) => {
  for (let i = 0; i < allKeys.length; i += 1) {
    if (event.code === keysList[i]) {
      allKeys[i].classList.remove('keystroke');
      break;
    }
  }

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (allKeys[0].innerHTML === '~') {
      valuesKeys(oneDimensionalList);
    }
    if (allKeys[0].innerHTML === 'Ё') {
      valuesKeys(rusListDef);
    }
  }
});

function switchLanguage(func, ...codes) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);

    for (const code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();

    func();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

switchLanguage(
  () => {
    if (allKeys[0].innerHTML === '~') {
      localStorage.clear();
      languageStorage = rusListDef;

      localStorage.setItem(lang, JSON.stringify(languageStorage));
      language = JSON.parse(localStorage.getItem(lang));
      valuesKeys(rusListDef);
    }
    if (allKeys[0].innerHTML === 'Ё') {
      localStorage.clear();
      languageStorage = oneDimensionalList;
      localStorage.setItem(lang, JSON.stringify(languageStorage));
      language = JSON.parse(localStorage.getItem(lang));
      valuesKeys(oneDimensionalList);
    }
  },
  'ShiftLeft',
  'ControlLeft',
);

document.addEventListener('keyup', (event) => {
  if (event.getModifierState('CapsLock')) {
    for (let i = 0; i < allKeys.length; i += 1) {
      if (/^[a-zа-я]$/i.test(allKeys[i].innerHTML)) {
        allKeys[i].innerHTML = allKeys[i].innerHTML.toUpperCase();
      }
    }
  }
  if (!event.getModifierState('CapsLock')) {
    for (let i = 0; i < allKeys.length; i += 1) {
      if (/^[a-zа-я]$/i.test(allKeys[i].innerHTML)) {
        allKeys[i].innerHTML = allKeys[i].innerHTML.toLowerCase();
      }
    }
  }
});
