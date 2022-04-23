function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function increment(n){
    n++;
    return n;
}

function decrement(n){
    n--;
    return n;
}

function makeInt(n, base){
    return(parseInt(n, 10));
}
console.log(makeInt('hello'));

function preserveDecimal(n){
    return(parseFloat(n, 10));
}
console.log(preserveDecimal('2.222nnn'));
