//var currentValue = "0";
/*function removeLeadingZero(val) {
  document.getElementById("result").value-=0;
}*/

function dis(val)  {
//removeLeadingZero(val);
         document.getElementById("result").value+=val
}

function dot(val) {
//placeholder keeps the zero after the decimal point DEAL WIT IT LATER
document.getElementById("result").value+=val
}



function clr() {
var currentValue = 0;
    document.getElementById("result").value = currentValue
  }

/*test case: 100/25% INCORRECT*/
function per(val) {
  let x = document.getElementById("result").value
  let y = x/100;
 document.getElementById("result").value = y
}
/*for 5+-2 test case and +/- button*/

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
if(isFinite(y)===false ){
  document.getElementById("result").value = "Error"
}
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
function makeCurrentValueNegative(val) {
  let x = document.getElementById("result").value

  let negVal = x*-1
  document.getElementById("result").value = negVal

}
/*FAILED TEST CASES
Enter 5 + - 3, and your calculator should display 2. DONE
Enter 8 + x 2, and your calculator should display 16.
Enter 8 + / 4, and your calculator should display 2.
1.2.3.4, and your calculator should display 1.234.
(doesnt evaluate for all 4)
Enter 7 and then press AC, and your calculator should display 0(input screen blank) (works now but doesnt go away)
Enter 9 and then +/-, and your calculator should display -9 DONEs
*/
