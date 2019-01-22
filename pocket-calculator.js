function removeLeadingZero(val) {
/*  let notRan;
  notRan = true;
if( notRan===true){
  document.getElementById("result").value+=""
}*/
//value-=0 gives the NAN(val) so don't

}

function dis(val)  {

//removeLeadingZero(val);
   document.getElementById("result").value+=val
   console.log(val);
   /*idek*/
  let num = document.getElementById("result").value
  if (num >= 999){
    document.getElementById("result").value.toLocaleString();
  }

}

function dot(val) {
//placeholder keeps the zero after the decimal point DEAL WIT IT LATER
document.getElementById("result").value+=val

let decimalCount = 0;
decimalCount = decimalCount+ 1;
console.log("there are", decimalCount)
/*works but you can oly use the decimal in one number*/
if (decimalCount >= 1){
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
/*infinity error message*/
if(isFinite(y)===false){
  document.getElementById("result").value+= "Error"
}
/*NAN error message*/
if (isNaN(y) ) {
 document.getElementById("result").value = "Error";
}
/*thousands place commas*/
if (y > 999){
 document.getElementById("result").value = y.toLocaleString();
}

}
/*negative symbol (+/-) and negative*/
function makeCurrentValueNegative(val) {
  let x = document.getElementById("result").value
  let negVal = x*-1
  document.getElementById("result").value = negVal
}


/*FAILED TEST CASES
Enter 8 + x 2, and your calculator should display 16.
Enter 8 + / 4, and your calculator should display 2.
1.2.3.4, and your calculator should display 1.234.
(doesnt evaluate for all 4)
Enter 7 and then press AC, and your calculator should display 0 (works now but doesnt go away)
*/
