// Calculator Program 

//first we need to get the Id

const display = document.getElementById("display");

// create three functions because we have three in html

function appendToDisplay(input){
   display.value += input;
}

function clearDisplay(){
   display.value="";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value="Error";
    }
    
}