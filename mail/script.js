// create an array of known emails
const authorizedList = ['pinco.pallo@gmail.com', 'jane.doe@gmail.com', 'erika@proton.me'];
console.log(authorizedList);

const emailElement = document.querySelector("#email");
const buttonElement = document.querySelector("#button");
const resultElement = document.querySelector("#result")

// ask the user for their email
buttonElement.addEventListener('click',
    function(){
        const userInput = emailElement.value;
        console.log(userInput)
    }
    )

// see if it matches any emails in the array
// communicate the result

