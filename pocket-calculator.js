let decimalCount = 0;

function removeLeadingZero(val) {
/*  let notRan;
  notRan = true;
if( notRan===true){
  document.getElementById("result").value+=""
}*/
//value-=0 gives the NAN(val) so don't
}
/*negative symbol (+/-) and negative*/
function makeCurrentValueNegative(val) {
  let x = document.getElementById("result").value
  let negVal = x*-1
  document.getElementById("result").value = negVal
}

function dis(val)  {
//removeLeadingZero(val);
   document.getElementById("result").value+=val
   console.log(val);
}

function dot(val) {
//placeholder keeps the zero after the decimal point DEAL WIT IT LATER

document.getElementById("result").value+=val
decimalCount = decimalCount+1;
console.log("Count is:", decimalCount)
/*works but you can oly use 2 decimals*/
if (decimalCount >= 2){
  var button = document.getElementById("decimal")
button.disabled = true;
}
}

function clr() {
var currentValue = 0;
    document.getElementById("result").value = currentValue
    decimalCount = 0;
  }

function per(val) {
  let x = document.getElementById("result").value
  let y = x/100;
 document.getElementById("result").value = y
}

function solve() {
  let x = document.getElementById("result").value
  let y = eval(x);
 document.getElementById("result").value = y
/*error message NAN*/
 if (isNaN(y) ) {
  document.getElementById("result").value = "Error";
}
/*scientific notation */
if (y > 999999999 ){
    document.getElementById("result").value = y.toExponential()
}else if   (y > 999){
  document.getElementById("result").value = y.toLocaleString();
}
/*infinity error message not working*/
if (isFinite(y)==false){
  document.getElementById("result").value= "Error"
}
/*NAN error message*/
if (isNaN(y) ) {
 document.getElementById("result").value = "Error";
}

}


/*FAILED TEST CASES
Enter 8 + x 2, and your calculator should display 16.
Enter 8 + / 4, and your calculator should display 2.
have opperators seperately

1.2.3.4, and your calculator should display 1.234.(Kinda solved)
(doesnt evaluate for all 4)
Enter 7 and then press AC, and your calculator should display 0 (works now but doesnt go away)
*/
