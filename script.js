const base10InputBox = document.getElementById('base10InputBox');

base10InputBox.addEventListener('input', convertToBase16);

function convertToBase16() {
const base10Value = +base10InputBox.value;
const base16Value = base10Value.toString(16);
document.getElementById('result').innerHTML = base16Value;
}


