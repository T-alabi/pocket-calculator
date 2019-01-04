//val is the value of the numbers DO NOT CHNAGE TO EACH NUMBER
function dis(val)  {
       document.getElementById("result").value+=val
}

function dot(val){
//placeholder keeps the zero after the decimal point
let placeholder = 0;
document.getElementById("result").value+=val+=val.placeholder="0";

}
function clr() {
    document.getElementById("result").value =" "
  }

function solve() {
  let x = document.getElementById("result").value
  let y = eval(x);
// (not working)  y = y.toLocateString()
 document.getElementById("result").value = y
/*error message*/
 if (isNaN(y) ) {
  document.getElementById("result").value = "Error";
}
/*thousands place commas*/
if (y > 999){
  document.getElementById("result").value = y.toLocaleString();
}
/*scientific notation */
if (y > 999999999){
    document.getElementById("result").value = y.toExponential();
}
}
