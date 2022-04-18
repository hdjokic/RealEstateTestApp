let input = document.querySelector('input');
let container = document.querySelector('.container');
let fruits = ['Apple', 'Orange', 'Kiwi', 'Grapes', 'Mango'];
input.addEventListener('keyup', (e) =>{
    let btnSubmit = document.querySelector('button');
    if(btnSubmit){
        container.removeChild(btnSubmit);
    }
    if(fruits.includes(e.target.value)){
        let btnSubmit = document.createElement('button');
        let btnText = document.createTextNode('Submit');
        
        btnSubmit.appendChild(btnText);
        container.appendChild(btnSubmit);
    }
});

