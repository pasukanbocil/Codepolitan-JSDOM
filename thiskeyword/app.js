const generateRandomColor = () => {
    
    const r = Math.floor(Math.random() * 255 );
    const g = Math.floor(Math.random() * 255 );
    const b = Math.floor(Math.random() * 255 );

    return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll('button');

for(let button of buttons ) {
  button.addEventListener('click',colorStyle);
}


const headings = document.querySelectorAll('h1');

for(let heading of headings ) {
  heading.addEventListener('click',colorStyle);
}

function colorStyle() {
  this.style.backgroundColor = generateRandomColor();
  this.style.color = generateRandomColor();
}