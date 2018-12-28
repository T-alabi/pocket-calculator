//val is the value of the numbers DO NOT CHNAGE TO EACH NUMBER
function dis(val)  {
       document.getElementById("result").value+=val
}

function clr() {
    document.getElementById("result").value =" "
  }

function solve() {
  let x = document.getElementById("result").value
  let y = eval(x);
 document.getElementById("result").value = y
 if (isNaN(y) ) {
  document.getElementById("result").value = "Error";
}//still doesnt work
}
