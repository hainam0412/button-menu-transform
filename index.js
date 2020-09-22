// Import stylesheets
import './style.css';

// Write Javascript code!
const button = document.getElementById('button');

let isShow =false;

button.addEventListener('click', () =>{
  if(isShow ===false){
 button.style.transform = 'rotate(180deg)';

 button.addEventListener('transitionend', () =>{
   button.innerHTML = `<i class="fas fa-times"></i>`;
 })
 isShow = true;
  }else{
     button.style.transform = 'rotate(-180deg)';
     isShow = false;

     button.addEventListener('transitionend', () =>{
   button.innerHTML = `<i class="fas fa-bars"></i>`;
 })
  }
 
})