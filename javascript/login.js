// step : 1 add click even handerler with the submit button;
document.getElementById('submit-btn').addEventListener('click', function(){

// step 2: get the email address inside the email input field
const emailField =document.getElementById('user-email');
const email = emailField.value;
// step : 3 how to get password
//  3 . a : set id on the html file
// 3. b: get the element 
// 3 .b: get the value from element

const passwordField = document.getElementById('user-password');
const password = passwordField.value;
// console.log(email, password);

// Danger :  do not email password on the client side [ note it]
// step 4: verify email & password  cheek whether valid user or not

if ( email === 'Ibrahimraju6881@gmail.com' && password === 'raju6881' ){
    window.location.href = 'bank.html';
}
else{
    alert( 'Please Try Again');
}


})