const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted');
});

document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Link clicked');
});