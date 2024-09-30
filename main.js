function Add(){
    init();
    var result= parseInt(firstNumber.value) + parseInt(secondNumber.value);
    document.getElementById("calculate").innerHTML = result;
}
function Sub(){
    init();
    var result= parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
    document.getElementById("calculate").innerHTML = result;
}
function Mult(){
    init();
    var result= parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
    document.getElementById("calculate").innerHTML = result;
}
function Div(){
    init();
    var result= parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
    document.getElementById("calculate").innerHTML = result;
}
function Mod(){
    init();
    var result= parseFloat(firstNumber.value) % parseFloat(secondNumber.value);
    document.getElementById("calculate").innerHTML = result;
}
function init(){
    firstNumber=document.getElementById("num1");
    secondNumber=document.getElementById("num2");
}
