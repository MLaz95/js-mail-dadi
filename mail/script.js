// create an array of known emails
const authorizedList = ['pinco.pallo@gmail.com', 'jane.doe@gmail.com', 'erika@proton.me'];
console.log(authorizedList);

// records all needed html elements
const emailElement = document.querySelector("#email");
const buttonElement = document.querySelector("#button");
const resultElement = document.querySelector("#result")

// ask the user for their email
buttonElement.addEventListener('click',
    function(){
        const userInput = emailElement.value;
        // sets up a variable to determine if the user email matches
        let accessGranted = false;
        
        // runs through every email in the array and compares with the user input
        for(i = 0; i < authorizedList.length; i++){
            if(userInput == authorizedList[i]){
                console.log(`${userInput} valid`)
                // if there is a match, the access variable is set to true
                accessGranted = true;
            }
        }
        // after comparing the user info with all the emails on the list
        // if the access variable is still false then access is denied
        if(accessGranted == false){
            console.log(`${userInput} denied`);
        }
    }
)
