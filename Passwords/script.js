window.addEventListener('DOMContentLoaded', () => {
    if (getCookie('lang') === 'ua') {
        langSwitcherText.textContent = langUa.textContent;
        dropdownSelect.classList.add('selected');
        localization(strings['ua']);
    } else {
        localization(strings['en']);
    }
});

const dropdown = document.querySelector('.dropdown'),
      dropdownSelect = document.querySelector('.dropdown__select'),
      dropdownImage = document.querySelector('.dropdown-image'),
      langSwitcher = document.querySelector('.lang-switcher'),
      langUa = document.querySelector('#ua'),
      langEn = document.querySelector('#en'),
      langSwitcherText = document.querySelector('.js-dropdown-text'),
      btn = document.querySelector('.password-generator-btn'),
      password = document.querySelector('.password');

const stringsPlace = document.querySelectorAll('[data-key]');

//Localization
const strings = {
    ua: {
        generatorTitle: "Згенеруйте свій пароль",
        generatorText: "Ваш пароль:",
        generatorBtn: "генерувати",
        generatorDescr: "Натисніть на кнопку, щоб згенерувати пароль"
    },
    en: {
        generatorTitle: "Generate Your Password",
        generatorText: "Your password is:",
        generatorBtn: "generate",
        generatorDescr: "Click the button to generate password"
    }
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

dropdown.addEventListener('click', (e) => {
    langSwitcher.classList.toggle('active');
    dropdownImage.classList.toggle('rotate');
    e.stopPropagation();
});

function localization(lang) {
    for (let elem of Object.keys(lang)) {
        stringsPlace.forEach(item => {
            item.textContent = lang[item.getAttribute('data-key')];
        });
    }
}

langSwitcher.addEventListener('click', (e) => {
    if (e.target === langUa) {
        langSwitcherText.textContent = langUa.textContent;
        dropdownSelect.classList.add('selected');
        localization(strings['ua']);
        document.cookie = 'lang=ua';

    } else if (e.target === langEn) {
        langSwitcherText.textContent = langEn.textContent;
        dropdownSelect.classList.remove('selected');
        localization(strings['en']);
        document.cookie = 'lang=en';
    } else {
        console.log('else');
    }
});

for (let string of stringsPlace) {
    if (strings.ua.hasOwnProperty(string.getAttribute('data-key'))) {
    }
}

// Password generator
const unicodeArr = ['1', '2', '3', '4', '5', '6', '7','8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '.', '_', '!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '/', ':', ';', '<', '=', '>', '?', '@'];

function shuffle(array) {
    let password;

    array.sort(() => Math.random() - 0.5);
    password = array.slice(0, 16).join('');

    return password;
}

btn.addEventListener('click', () => {
    password.textContent = shuffle(unicodeArr);
});


