// step 1 : addeventlisenar to the deposit button

document.getElementById('btn-deposit').addEventListener('click' , function(){
   
//  step 2: get the deposit amound from the deposit input feilds
// for input field use .value to the value inside the input field
const depositField =document.getElementById('deposit');
const newDepositAmountstring = depositField.value;

 const newDepositAmount = parseFloat(newDepositAmountstring)
 
// step 3: get the current deposit total 
// for non input (element other than input ,textarea) use innertext to get the text
const depositTotalElement =document.getElementById('deposti-total');
 const previousDepositTotalstring = depositTotalElement.innerText;
 const previousDepositTotal = parseFloat(previousDepositTotalstring);
 depositTotalElement.innerText = newDepositAmount;
// step 4: add number to set the total deposit
const currentDepositTotal = previousDepositTotal + newDepositAmount;
// set the deposit total
depositTotalElement.innerText = currentDepositTotal;

// step 5 : get balance current total

const amountTotalElement =document.getElementById('amound-total');
const previousAmountTotal = amountTotalElement.innerText;
const amountTotal  = parseFloat(previousAmountTotal);


// step 6 : calculate current  total amound 
const currentTotalAmound = amountTotal + newDepositAmount;

// set the total amound 

amountTotalElement.innerText = currentTotalAmound;







//   step 7 : celear the deposit feilds
depositField.value = '';
})