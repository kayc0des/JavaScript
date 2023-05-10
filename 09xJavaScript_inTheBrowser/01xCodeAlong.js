/* Code Along */

var h1 = document.createElement('h1');
h1.innerHTML = "Type into the input to make this text change";

var input = document.createElement('input');
input.setAttribute('type', 'text');

document.body.innerHTML = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function(){
    h1.innerText = input.value;
})