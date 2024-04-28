/*console.log("Hello ");*/

//window.alert("You have downloaded the files successfully");

// This is a comment 
/* This is a comment */

/*let content = 'Content';
let p = 'Paragraph 1';
let q = 'Paragraph 2';
let r = 'Paragraph 3';

document.getElementById("myh3").textContent = `This is ${content}`;
document.getElementById("myp1").textContent = `This is ${p}`;
document.getElementById("myp2").textContent = `This is ${q}`;
document.getElementById("myp3").textContent = `This is ${r}`;
*/
/*let students = 30;

students /= 2 ;
console.log(students); */ 

/* let username = window.prompt(`What's your username `);
console.log(username);*/

/*document.getElementById('23').onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("12").textContent = `Welcome ${username}`;
}
*/
/*-------------------------------------------------------*/


const display = document.getElementById("display");

function appendToDisplay(input) {

    display.value += input;

}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch (error){
        display.value = "Error";
    }
}