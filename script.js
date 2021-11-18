
let button = document.getElementById('switch');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

let change = function() {
    let a = input1.value;
    input1.value = input2.value;
    input2.value = a;
}

button.addEventListener("click", change);
