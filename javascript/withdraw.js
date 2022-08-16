/*
1. add event handeler  with withdraw button
2. get the withdraw amout from the withdraw input fields
3. get previous withdraw amount

*/ 
// step 1:

document.getElementById('btn-withdraw').addEventListener('click', function(){
// step 2 :
const withdrawFields = document.getElementById('withdraw')
const newWithdrawfields = withdrawFields.value;
const newWithdrawAmound  = parseFloat(newWithdrawfields);
 
// step 3:
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawString = withdrawTotalElement.innerText;
const previousWithdraw = parseFloat(previousWithdrawString);

//  step 4 : 
const currentTotalWithdraw = previousWithdraw + newWithdrawAmound;
withdrawTotalElement.innerText = currentTotalWithdraw;
// step 5 : 
const amoundTotalElement =document.getElementById('amound-total');
const previousAmountTotal = amoundTotalElement.innerText;
const amountTotal  = parseFloat(previousAmountTotal);
//  step 6 :

const currentamound = amountTotal - newWithdrawAmound;

amoundTotalElement.innerText = currentamound ;

//   step 7 : celear the deposit feilds
withdrawFields.value = '';


})