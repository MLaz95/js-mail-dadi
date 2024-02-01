const buttonElement = document.querySelector("#button")
const playerElement = document.querySelector("#player")
const computerElement = document.querySelector("#computer")
const resultElement = document.querySelector("#result")

buttonElement.addEventListener('click',
    function() {
        const playerRoll = (Math.floor(Math.random() * 6) + 1);
        const computerRoll = (Math.floor(Math.random() * 6) + 1);

        console.log(`You rolled a ${playerRoll}, the computer rolled a ${computerRoll}.`)
        playerElement.innerHTML = playerRoll
        computerElement.innerHTML = computerRoll

        if(playerRoll == computerRoll){
            resultElement.innerHTML = "It's a tie!"
        } else if(playerRoll > computerRoll){
            resultElement.innerHTML = "You won!"
        } else{
            resultElement.innerHTML = "You lost!"
        }


        
    }
)