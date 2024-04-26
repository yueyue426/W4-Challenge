// Access button switch HTML element
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
const formEl = document.querySelector('#form-theme')

// Set default mode to light
let mode = 'light';

// Listen for a click event to switch mode
themeSwitcher.addEventListener('click', function() {
    if(mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
        formEl.setAttribute('class', 'dark');
    } else {
        mode = 'light';
        container.setAttribute('class', 'light');
        formEl.setAttribute('class', 'light');
    }
});