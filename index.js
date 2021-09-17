const fahrenheitSyote = document.querySelector('#inputF');
const fahrenheitTuloste = document.querySelector('#fahrenheit');
const celsiusSyote = document.querySelector('#inputC');
const celsiusTuloste = document.querySelector('#celsius');
const muunnaButton1 = document.querySelector('#button1');
const muunnaButton2 = document.querySelector('#button2');
const fahrenheitTuloste2 = document.querySelector('#fahrenheit2');
const celsiusTuloste2 = document.querySelector('#celsius2');

function fahrenheitCelsiukseksi(fahrenheit) {
    let celsius = fahrenheit;
    return celsius;
}

function muunna() {
    let fsyote = fahrenheitSyote.value;
    fahrenheitTuloste.textContent = fsyote;

    celsiusTuloste.textContent = (fsyote-32)/1.8;
}

function celsiuksetFahrenheitiksi(celsius2) {
    let fahrenheit2 = celsius2;
    return fahrenheit2;
}

function muunna2() {
    let csyote = celsiusSyote.value;
    celsiusTuloste2.textContent = csyote;

    fahrenheitTuloste2.textContent = (csyote*1.8)+32;
}

muunnaButton1.addEventListener('click', muunna);

muunnaButton2.addEventListener('click', muunna2);