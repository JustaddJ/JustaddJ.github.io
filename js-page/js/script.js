'use strict'

const slider = document.querySelector('.switch'),
      checkbox = slider.querySelector('[type="checkbox"]'),
      period = document.querySelectorAll('.js-period')

let price = document.querySelectorAll('.js-price')



checkbox.addEventListener('change', (event) => {
    if (checkbox.checked) {
        price.forEach((item, i) => {
            if (i < 1) {
                item.textContent = '$399';
            } else if (i == 1) {
                item.textContent = '$499';
            } else {
                item.textContent = '$899';
            };
        });

        period.forEach((item) => {
            item.textContent = '/yearly';
        });
    } else {
        price.forEach((item, i) => {
            if (i < 1) {
                item.textContent = '$49';
            } else if (i == 1) {
                item.textContent = '$59';
            } else {
                item.textContent = '$79';
            };
        });

        period.forEach((item) => {
            item.textContent = '/month';
        });
    }

});

