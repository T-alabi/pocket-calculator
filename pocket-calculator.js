function dot(val){
//placeholder keeps the zero after the decimal point
//do later (decimal point)
document.getElementById("result").value+=val+0;

}
function dis(val)  {
       document.getElementById("result").value+=val
}

function dot(val) {
//placeholder keeps the zero after the decimal point DEAL WIT IT LATER
document.getElementById("result").innerHTML;

}

function clr() {
    document.getElementById("result").value =" "
  }

function per(val) {
  let x = document.getElementById("result").value
  let y = eval(x)/100;
 document.getElementById("result").value = y
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

function solve() {
  let x = document.getElementById("result").value
  let y = eval(x);
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
