window.onload = function () {

    let keyboard = {
      language: false,
      capsLock: false,
      russianKeys: [],
      englishKeys: [
        '§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
        'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']',
        'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&#39;', '&#92;', 'enter',
        'shift', '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#708;', 'shift',
        'fn', 'ctrl', 'alt:)', 'win', '', 'win', 'alt', '&#706;', '&#709;', '&#707;'
      ],
  
      russianKeys: [
        '§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
        'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ',
        'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '&#92;', 'enter',
        'shift', ']', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#708;', 'shift',
        'fn', 'ctrl', 'alt', 'win', ' ', 'win', 'alt', '&#706;', '&#709;', '&#707;'
      ],
  
      englishKeyCodes: [
        'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
        'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight',
        'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter',
        'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
        'fn', 'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'
      ],
  
      drawKeyboard() {
        document.body.insertAdjacentHTML("afterbegin",
          `
          <div class="wrapper"><textarea id="console" class="textarea" rows="6"></textarea>
  
          <div class="row">
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div id="backspace" class="key backspace">
          <span class="keyText"></span>
          </div>
  
          </div>
  
  
          <div class="row">
  
          <div class="key tab">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          </div>
  
          <div class="row">
  
          <div class="key caps">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key enter">
          <span class="keyText"></span>
          </div>
  
          </div>
  
          <div class="row">
  
          <div class="key shift">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key">
          <span class="keyText"></span>
          </div>
  
          <div class="key up">
          <span class="keyText"></span>
          </div>
  
          <div class="key shift-right">
          <span class="keyText"></span>
          </div>
  
          </div>
  
          <div class="row">
  
          <div class="key fn">
          <span class="keyText"></span>
          </div>
  
          <div class="key ctrl">
          <span class="keyText"></span>
          </div>
  
          <div class="key alt">
          <span class="keyText"></span>
          </div>
  
          <div class="key command">
          <span class="keyText"></span>
          </div>
  
          <div class="key space">
          <span class="keyText"></span>
          </div>
  
          <div class="key command">
          <span class="keyText"></span>
          </div>
  
          <div class="key alt">
          <span class="keyText"></span>
          </div>
  
          <div class="key left">
          <span class="keyText"></span>
          </div>
  
          <div class="key down">
          <span class="keyText"></span>
          </div>
  
          <div class="key right">
          <span class="keyText"></span>
          </div>
         
          </div>
          <div class='description'>
          Switch the language: alt+shift</p>
         </div>
          </div>
         
          `);
      },
  
      fillKeysEng() {
        let allKeysCollection = document.getElementsByClassName('keyText');
        for (let i = 0; i < allKeysCollection.length; i++) {
          allKeysCollection[i].innerHTML = this.englishKeys[i];
        }
      },
  
      fillKeysRu() {
        let allKeysCollection = document.getElementsByClassName('keyText');
        for (let i = 0; i < allKeysCollection.length; i++) {
          allKeysCollection[i].innerHTML = this.russianKeys[i];
        }
      },
  
      print() {
  
        this.drawKeyboard();
        if (localStorage.layout === 'true') {
          this.fillKeysRu();
        } else if (localStorage.layout === 'false') {
          this.fillKeysEng();
        } else if (localStorage.layout == undefined) {
          this.fillKeysEng();
        }
  
        this.mousePrint();
  
        document.addEventListener('keydown', function (event) {
          let textArea = document.getElementById('console');
          let allKeysCollection = document.getElementsByClassName('keyText');
          let stylePush = document.getElementsByClassName('key');
  
  
          for (let i = 0; i < allKeysCollection.length; i++) {
            if (event.code == keyboard.englishKeyCodes[i]) {
  
              if (event.code == 'CapsLock') {
                keyboard.capsPush();
              }
  
              if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
                keyboard.languageChange();
              }
  
              if (event.code !== 'Backspace' && event.code !== 'Tab' && event.code !== 'CapsLock' && event.code !== 'ShiftLeft' && event.code !== 'ShiftRight' && event.code !== 'Enter' && event.code !== 'ControlLeft' && event.code !== 'ControlRight' && event.code !== 'AltLeft' && event.code !== 'MetaLeft' && event.code !== 'MetaRight' && event.code !== 'AltRight') {
                textArea.innerHTML += allKeysCollection[i].innerHTML;
              }
  
              if (event.code == 'Backspace') {
                let newLog = textArea.innerHTML.split('');
                newLog.pop();
                newLog = newLog.toString('');
                newLog = newLog.replace(/,/g, '');
                textArea.innerHTML = newLog;
              }
  
              if (event.code == 'Enter') {
                textArea.innerHTML += '\n'
              }
  
              function addClass() {
                return stylePush[i].classList.add('push');
              }
              addClass()
  
              function removeClass() {
                return stylePush[i].classList.remove('push');
              }
              setTimeout(removeClass, 400);
            }
          }
        })
      },
  
      mousePrint() {
        let allKeysCollection = document.getElementsByClassName('key');
        let insideText = document.getElementsByClassName('keyText')
        let textArea = document.getElementById('console');
  
        for (let i = 0; i < allKeysCollection.length; i++) {
          allKeysCollection[i].addEventListener('click', function () {
  
            if (insideText[i].innerHTML !== 'tab' && insideText[i].innerHTML !== 'CapsLock' && insideText[i].innerHTML !== 'capslock' && insideText[i].innerHTML !== 'shift' && insideText[i].innerHTML !== 'fn' && insideText[i].innerHTML !== 'ctrl' && insideText[i].innerHTML !== 'alt' && insideText[i].innerHTML !== 'win' && insideText[i].innerHTML !== 'enter' && insideText[i].innerHTML !== 'backspace' && insideText[i].innerHTML !== 'CAPSLOCK' && insideText[i].innerHTML !== 'SHIFT' && insideText[i].innerHTML !== 'FN' && insideText[i].innerHTML !== 'CTRL' && insideText[i].innerHTML !== '' && insideText[i].innerHTML !== 'win' && insideText[i].innerHTML !== 'ENTER' && insideText[i].innerHTML !== 'BACKSPACE' && insideText[i].innerHTML !== 'TAB') {
              textArea.innerHTML += insideText[i].innerHTML;
            }
  
            if (insideText[i].innerHTML === 'backspace' || insideText[i].innerHTML === 'BACKSPACE') {
              let newLog = textArea.innerHTML.split('');
              newLog.pop();
              newLog = newLog.toString('');
              newLog = newLog.replace(/,/g, '');
              textArea.innerHTML = newLog;
            }
  
            if (insideText[i].innerHTML == 'enter' || insideText[i].innerHTML === 'ENTER') {
              textArea.innerHTML += '\n'
            }
  
            if (insideText[i].innerHTML === 'SHIFT' || insideText[i].innerHTML == 'shift') {
              keyboard.languageChange();
            }
  
            if (insideText[i].innerHTML === 'CapsLock' || insideText[i].innerHTML === 'CAPSLOCK' || insideText[i].innerHTML === 'capslock') {
              keyboard.capsPush();
            }
  
            function addClass() {
              return allKeysCollection[i].classList.add('push');
            }
            addClass()
  
            function removeClass() {
              return allKeysCollection[i].classList.remove('push');
            }
            setTimeout(removeClass, 50);
  
          })
        }
      },
  
      capsPush() {
        this.capsLock = !this.capsLock;
        let allKeysCollection = document.getElementsByClassName('keyText');
        for (const key of allKeysCollection) {
          key.textContent = this.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
        }
      },
  
      languageChange() {
        this.language = !this.language;
        let allKeysCollection = document.getElementsByClassName('keyText');
        for (const key of allKeysCollection) {
          if (this.language == true) {
            this.fillKeysRu();
          } else {
            this.fillKeysEng();
          }
        }
        localStorage.layout = this.language;
      }
    }
  
    keyboard.print();
  }