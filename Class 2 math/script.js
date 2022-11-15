const h1 = document.querySelector('h1');
const var1 = document.querySelector('#var1');
const var2 = document.querySelector('#var2');
const btn = document.querySelector('#btnSum');
var result = document.querySelector('#result');

btn.addEventListener('click',btnClick);


function btnClick () {
    result.innerText = Number(var1.value)+Number(var2.value);


};