const numbers789 = Array.from(document.querySelectorAll('.number')).slice(0,3);
const numbers456 = Array.from(document.querySelectorAll('.number')).slice(3,6);
const numbers123 = Array.from(document.querySelectorAll('.number')).slice(6,9);
const numbers = [(document.querySelector('.zero'))].concat(numbers123).concat(numbers456).concat(numbers789);
for (let i=0; i<10; i++){
    numbers[i].addEventListener('click',()=>{console.log(i);})
}