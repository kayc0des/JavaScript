/* Capture Data Exercise to be used on the example.com connsole */

var h1 = document.querySelector('h1');
var arr = ['Example Domain', 'First Click', 'Second Click', 'Third Click'];

function handleClicks() {
    switch(h1.innerHTML) {
        case arr[0]:
            h1.innerHTML = arr[1];
            break;
        case arr[1]:
            h1.innerHTML = arr[2];
            break;
        case arr[2]:
            h1.innerHTML = arr[3];
            break;
        default:
            h1.innerHTML = arr[0];
    }
}

h1.addEventListener('click', handleClicks);