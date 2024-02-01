const buttonElement = document.querySelector("#button")

buttonElement.addEventListener('click',
    function() {
        const playerRoll = (Math.floor(Math.random() * 6) + 1);
        const computerRoll = (Math.floor(Math.random() * 6) + 1);

        console.log(`You rolled a ${playerRoll}, the computer rolled a ${computerRoll}.`)
        if(playerRoll == computerRoll){
            console.log("That's a tie!")
        } else if(playerRoll > computerRoll){
            console.log("you won!")
        } else{
            console.log("you lost")
        }


        
    }
)