//UC1
let readline = require('readline-sync')

const REGEX_NAME = /^[A-Z][a-zA-Z]{2}/;
const REGEX_EMAIL = /^[a-zA-Z0-9_.]+@[a-zA-Z.a-zA-Z{2,}.a-zA-Z{2,}]+$/;
const REGEX_MOBILE = /^[9][1][ ][6-9]{1}[0-9]{9}$/;
const REGEX_PASSWORD = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#&$]).{8,}$/;
function fname() {
const REGEX_NAME = /^[A-Z][a-zA-Z]{2}/;
var firstName = readline.question('enter your firstname :');
    if(REGEX_NAME.test(firstName)) {
        console.log("Validated.");
        return true;
    }
    else {
        console.log("Please enter correct format!");
        fname();
        return false;
    }
}

function lname() {
var lastName = readline.question('enter your lastname :');
    if(REGEX_NAME.test(lastName)) {
        console.log("Validated.");
        return true;
    }
    else {
        console.log("Please enter correct format!");
        lname();
        return false;
    }
}
function email() {
const REGEX_EMAIL = /^[a-zA-Z0-9_.]+@[a-zA-Z.a-zA-Z{2,}.a-zA-Z{2,}]+$/;
var emailReg = readline.question('enter your email :');
    if(REGEX_EMAIL.test(emailReg)) {
            console.log("Validated.");
            return true;
        }
        else {
            console.log("Please enter correct format!");
            email();
            return false;
        }
}
function phone() {
const REGEX_MOBILE = /^[9][1][ ][6-9]{1}[0-9]{9}$/;
var mobileReg = readline.question('enter your mobile :');
    if(REGEX_MOBILE.test(mobileReg)) {
            console.log("Validated.");
            return true;
        }
        else {
            console.log("Please enter correct format!");
            phone();
            return false;
        }
}

function paswad() {
const REGEX_PASSWORD = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#&$]).{8,}$/;
var passwordReg = readline.question('enter your password :');
    if(REGEX_PASSWORD.test(passwordReg)) {
        console.log("Validated.");
        return true;
    }
    else {
        console.log("Please enter correct format!");
        paswad();
        return false;
    }
}
while(true) {
fname();
lname();
email();
phone();
paswad();
break;
}



