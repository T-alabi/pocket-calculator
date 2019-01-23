let decimalCount = 0;
let arr = [];
let decimalArray = [];
let aRay = [];

/*negative symbol (+/-) and negative*/
function makeCurrentValueNegative(val) {
  let x = document.getElementById("result").value
  let negVal = x*-1
  document.getElementById("result").value = negVal
}

function dis(val)  {
  if (arr[0] === 0) {
    arr.shift();
    arr.push(val);
    document.getElementById("result").value = val;
  }
  else {
    arr.push(val);
    document.getElementById("result").value += val;
  }
  console.log(val);

}

function dot(val) {
//placeholder keeps the zero after the decimal point DEAL WIT IT LATER

decimalStat = false;

let findDecimal= decimalArray.indexOf(".");
 // alert(findNegative);
 if(decimalStat == false){
 document.getElementById("result").value += val
decimalArray.push(val)
document.getElementById("decimal").disabled = true;
}

}

function clr() {
    arr = [0];
    document.getElementById("result").value = "0"
    decimalStatInsert = false;
    document.getElementById("decimal").disabled = false;
  }

function per(val) {
  let x = document.getElementById("result").value
  let y = x/100;
 document.getElementById("result").value = y
}

function solve() {
  // operators

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
for (let j = 0; j < aRay.length - 1; j++) {
  if ((aRay[j] == "+" || aRay[j] == "-" || aRay[j] == "*" || aRay[j] == "/") && (aRay[j + 1] == "+" || aRay[j + 1] == "-" || aRay[j + 1] == "*" || aRay[j + 1] == "/")) {
    arr.splice(j, 1);
    j--;
  }
}
}


/*FAILED TEST CASES
Enter 8 + x 2, and your calculator should display 16.
Enter 8 + / 4, and your calculator should display 2.
have opperators seperately
*/
