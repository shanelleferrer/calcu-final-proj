//calculator
const display = document.getElementById("display");
let prevAns = new String("");
let ansDisplay = false;

function appendToDisplay(input){
    if(ansDisplay === true){
        clearDisplay();
        display.value += input;
        ansDisplay = false;
    }
    else{
        display.value += input;
    }
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
        ansDisplay = true;
    }
    catch(error){
        display.value = "ERROR";
    }
    prevAns.value = display.value;
}

function prevAnswer(){
    if(prevAns.value === ""){
        display.value += "UNDEFINED";
    }
    else{
        if(display.value !== ""){
            display.value += prevAns.value;
            ansDisplay = false;
        }
        else{
            clearDisplay();
            display.value += prevAns.value;
            ansDisplay = false;
        }
    }
}