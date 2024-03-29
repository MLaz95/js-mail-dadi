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
                // if there is a match, the access variable is set to true and the result is displayed
                accessGranted = true;
                resultElement.innerHTML = `Welcome Agent n°${i+1}, Access Granted`;
                resultElement.className = 'opacity-100';
            }
        }
        // after comparing the user info with all the emails on the list
        // if the access variable is still false then access is denied
        if(accessGranted == false){
            console.log(`${userInput} denied`);
            resultElement.innerHTML = `Access Denied`;
            resultElement.className = 'opacity-100';

        }
    }
)
