let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let array = Array.from(buttons);
array.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        else{
            string += e.target.innerHTML;
            input.value = string
        }

       
    })
}) 
    







// let num1 = 7
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2


// let sumEl = document.getElementById("sum-el")

// function add() {
//     let result = num1 + num2
//     sumEl.textContent = "Sum: " + result
// }

// function subtract() {
//     let result = num1 - num2
//     sumEl.textContent = "Sum: " + result
// }

// function divide() {
//     let result = num1 / num2
//     sumEl.textContent = "Sum: " + result
// }

// function multiply() {
//     let result = num1 * num2
//     sumEl.textContent = "Sum: " + result
// }