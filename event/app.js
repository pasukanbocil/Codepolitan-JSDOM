const button = document.querySelector('#clickme');

button.onclick = function(){
    console.log('You clicked me!');
};

const scream    = () => {
    console.log('Ahhhhhhhhhh!');
};

button.onmouseover = scream;

const eventbtn = document.querySelector('#eventbtn');

eventbtn.addEventListener('click', step1);
eventbtn.addEventListener('click', step2);

function step1(){
    console.log('Step 1');
}

function step2(){
    console.log('Step 2');
}

// eventbtn.onclick = step1;