let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

function celToFar() {
    if (celsius.value === "") return;
    let output = (parseFloat(celsius.value) * 9/5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function celToKel() {
    if (celsius.value === "") return;
    let output = parseFloat(celsius.value) + 273.15;
    kelvin.value = parseFloat(output.toFixed(2));
}

function farToCel() {
    if (fahrenheit.value === "") return;
    let output = (parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat(output.toFixed(2));
}

function farToKel() {
    if (fahrenheit.value === "") return;
    let output = (parseFloat(fahrenheit.value) - 32) * 5/9 + 273.15;
    kelvin.value = parseFloat(output.toFixed(2));
}

function kelToCel() {
    if (kelvin.value === "") return;
    let output = parseFloat(kelvin.value) - 273.15;
    celsius.value = parseFloat(output.toFixed(2));
}

function kelToFar() {
    if (kelvin.value === "") return;
    let output = (parseFloat(kelvin.value) - 273.15) * 9/5 + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}
