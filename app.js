//CALCULATOR
function getnumber(num){
var answer = document.getElementById("answer")
answer.value += num;
}
function clearinput(){
 var answer = document.getElementById("answer")
answer.value = "" 
}
function getresult(){
    var answer = document.getElementById("answer")
    console.log(answer.value)
    answer.value = eval(answer.value)
}