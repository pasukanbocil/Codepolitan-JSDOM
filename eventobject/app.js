document.querySelector('button').addEventListener('click',(e)=>{
    console.log(e);
});


const input = document.querySelector('input');
input.addEventListener('keydown',(e)=>{
   switch (e.code) {
    case 'ArrowUp':
        console.log('Tombol panah atas ditekan');
        break;
    case 'ArrowDown':
        console.log('Tombol panah bawah ditekan');
        break;
    case 'ArrowLeft':
        console.log('Tombol panah kiri ditekan');
        break;
    case 'ArrowRight':
        console.log('Tombol panah kanan ditekan');
        break;
    default:
        console.log('Diabaikan');
        break;
   }
});

// input.addEventListener('keyup',()=>{
//     console.log('Tombol dilepas');
// });