const numbers789 = Array.from(document.querySelectorAll('.number')).slice(0,3);
const numbers456 = Array.from(document.querySelectorAll('.number')).slice(3,6);
const numbers123 = Array.from(document.querySelectorAll('.number')).slice(6,9);
const numbers = [(document.querySelector('.zero'))].concat(numbers123).concat(numbers456).concat(numbers789);
const dot = document.querySelector('.dot');
const operators= Array.from(document.querySelectorAll('.operator')); // '/' '*' '-' '+' '='
const special= Array.from(document.querySelectorAll('.special')); // 'AC' '+/-' '%'
const screen = document.querySelector('.screen');

let text= '';
let numberOld = 0;
let equalOperator = 0;
screen.textContent= '0'

for (let i=0; i<10; i++){
    numbers[i].addEventListener('click',()=>{addNumber(i);})
}

dot.addEventListener('click',()=>{addDot();});

for (let i=0; i<4; i++){
    operators[i].addEventListener('click',()=>{operation(i+1);})
}

//operators[0].addEventListener('click',()=>{divition();});
//operators[1].addEventListener('click',()=>{multiplication("w");});
//operators[2].addEventListener('click',()=>{rest();});
//operators[3].addEventListener('click',()=>{plus();});
operators[4].addEventListener('click',()=>{equal();});

special[0].addEventListener('click',()=>{text=''; numberOld= 0; equalOperator= 0; screen.textContent= '0';}); //AC
special[1].addEventListener('click',()=>{text= (Number(text) * (-1) ).toString(); screen.textContent=text;}); //+/-
special[2].addEventListener('click',()=>{text= (Math.round(Number(text)) /100).toString(); screen.textContent=text;}); //%


function addNumber(number)
{   
    if(equalOperator!==0&&numberOld==0) screen.textContent='0';
    text= text+number; 
    console.log(text);
    if(text.length<=11)
    screen.textContent= text;
    if(text.length>15)
        nanFuntion();
}


function nanFuntion(){
    text='';
    numberOld=0;
    screen.textContent = "NaN"
}

function operation(option){
    if (equalOperator!==0&&text!=='')
       equal();
    else
    screen.textContent='';

    numberOld= Number(text);
    text='';
    equalOperator = option;
}



function equal(){
    switch(equalOperator){
        case 1:{
            text=(Math.round(numberOld/Number(text)*100000000)/100000000).toString();
            screen.textContent=text;
            break;}

        case 2:{ 

            text=(Math.round((numberOld*Number(text))*100000000)/100000000).toString();
            screen.textContent=text;
            break;}
        case 3:{ 

            text=(Math.round((numberOld-Number(text))*100000000)/100000000).toString();
            screen.textContent=text;
            break;}
        
        case 4:{ 

            text=(Math.round((numberOld+Number(text))*100000000)/100000000).toString();
            screen.textContent=text;
            break;}
        
        case 5: { break;}
    }
    equalOperator=0;
    numberOld=0;
}