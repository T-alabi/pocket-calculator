
//val is the value of the numbers DO NOT CHNAGE TO EACH NUMBER
function dis(val)  {
       document.getElementById("result").value+=val
}

function dot(val){
//placeholder keeps the zero after the decimal point
//do later (decimal point)
document.getElementById("result").value+=val+=val.placeholder="0";
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
  /*divid the number with the percent by 100 beore anything else. use division */
  //x% should be x/100
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
