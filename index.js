// Import stylesheets
import './style.css';

// Write Javascript code!
const quiz = document.querySelector('.quiz');
const CnArr = [];
const TtArr = [];
const TdArr = [];
const StArr = [];

const buttons = quiz.querySelectorAll('button');

for( let b of buttons){
  b.addEventListener('click', () =>{
    const dataCn = b.getAttribute('data-cn');
    const dataTt = b.getAttribute('data-tt');
    const dataTd = b.getAttribute('data-td');
    const dataSt = b.getAttribute('data-st');

    CnArr.push(dataCn);
    TtArr.push(dataTt);
    TdArr.push(dataTd);
    StArr.push(dataSt);

    console.log(CnArr);

    console.log(TtArr);

    console.log(TdArr);

    console.log(StArr);
  })

  
}



