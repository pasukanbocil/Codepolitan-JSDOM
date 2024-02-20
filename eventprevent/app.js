const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('#notes');


// input.addEventListener('change', (e) => {
//     console.log('nilai nerubah');
// });

// input.addEventListener('input', (e) => {
//     document.querySelector('h1').innerText = input.value;
//     console.log('input event');
// });

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const noteValue = input.value;
    const newList = document.createElement('li');
    newList.innerText = noteValue;
    list.append(newList);
    input.value = '';
});

list.addEventListener('click', (e) => {
    e.target.nodeName === 'LI' && e.target.remove();
});

// const lis = document.querySelectorAll('li');
// for (let li of lis){
//     li.addEventListener('click',function(){
//         li.remove();
//     });
// }

