let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

function convertTemp() {
    if (celsius.value !== "") {
        fahrenheit.value = ((parseFloat(celsius.value) * 9/5) + 32).toFixed(2);
        kelvin.value = (parseFloat(celsius.value) + 273.15).toFixed(2);
    } 
    else if (fahrenheit.value !== "") {
        celsius.value = ((parseFloat(fahrenheit.value) - 32) * 5/9).toFixed(2);
        kelvin.value = (((parseFloat(fahrenheit.value) - 32) * 5/9) + 273.15).toFixed(2);
    } 
    else if (kelvin.value !== "") {
        celsius.value = (parseFloat(kelvin.value) - 273.15).toFixed(2);
        fahrenheit.value = (((parseFloat(kelvin.value) - 273.15) * 9/5) + 32).toFixed(2);
    } 
    else {
        alert("Please enter a value in any one field!");
    }
}
  
function resetFields() {
    celsius.value = "";
    fahrenheit.value = "";
    kelvin.value = "";
}
// Allow Enter key to trigger conversion
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        convertTemp();
    }
});
