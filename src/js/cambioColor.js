
const boton = document.getElementById('btn');

boton.addEventListener('click', function() {
    const PrmColor = document.body.style.backgroundColor;

    if (PrmColor === 'white') {
        document.body.style.backgroundColor = '#700000';
    } else {
        document.body.style.backgroundColor = 'white';
    }
});