// character sets 
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "0123456789"
const symbolSet = "!@#$%^&*()_+=-[]{};':'/?"

// selectors
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");


// function to randomly choose a random character from one of our sets
const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}


// function to generate random number within a certain range 
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const generatePassword = (password = "") => {
    while ( password.length < totalChar.value) {

        // error handling: if the user has not selected a box, break
        if ( !upperInput.checked && !lowerInput.checked && 
            !numberInput.checked && !symbolInput.checked) 
            {break;}

        // randomly choose on of our four sets
        var chosenSet = getRandomNumberInRange(0,3);
        var newChar;

        // choose a random char from our set
        if (chosenSet == 0 && upperInput.checked) {
            newChar = getRandomData(upperSet);
        } else if ( chosenSet == 1 && lowerInput.checked) {
            newChar = getRandomData(lowerSet);
        } else if ( chosenSet == 2 && numberInput.checked) {
            newChar = getRandomData(numberSet);
        } else if ( chosenSet == 3 && symbolInput.checked) {
            newChar = getRandomData(symbolSet);
        } else {
            continue;
        }
        
        // if that char isn't in our password already, add it in
        if (!password.includes(newChar)) {
            password += newChar;
        }
    }
    passBox.innerText = password;
}

document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatePassword();
    }
)