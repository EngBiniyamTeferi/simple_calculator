let store = document.getElementById("store");
let numbers = [];

let expression = "";

function press(num){
    expression += num;
    store.value = expression;
}

function equal() {

    store.value = eval(expression);
    expression = "";

}

function erase(){
    expression = "";
    store.value = expression;
}
