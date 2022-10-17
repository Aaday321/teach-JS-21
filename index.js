
let faceCard = ""
let first_card = randomNumberMe()
let second_card = randomNumberMe()
let cardsInHand = [first_card, second_card]
let summ = 0
let youLost = false
let gameStarted = false



let cardOneText = document.getElementById("card1")
let cardTwoText = document.getElementById("card2")
let gameText = document.getElementById("output")
let sumText = document.getElementById("sum")
let startBTN = document.getElementById("start-button")





function newCard(){
    if(youLost === true){
        cardsInHand.push(randomNumberMe())
        gameText.textContent = compare()
        printCards()
    } else{

    }
    
}


function startGame(){
    if(gameStarted === false){
        gameStarted = true
        gameText.textContent = compare()
        printCards()
        startBTN.textContent = "RESTART"
    } else{
        gameText.textContent = compare()
        printCards()
        gameStarted = true

    }

}

function compare(){
    summ = 0
    for (count = 0; count < cardsInHand.length; count++){ 
        summ += cardsInHand[count]
        console.log(summ)
    }
    console.log("\n")

    let output = ""
    if(summ < 21){
        output = "Do you want to draw a new card?"
    } else if (summ === 21){
        output = "You won!"
    } else {
        output = "You're out of the game!"
       // youLost = true
    }
    sumText.textContent = "Sum: " + summ
    return output
}

function randomNumberMe(){
    let numGen = Math.floor(Math.random() * 13 + 1)
    let numOut = 0

    if (numGen === 1){
        numOut = 10 + numGen
        faceCard = "A"
    } else if(numGen === 11){
        numOut = 10
        faceCard = "J"
    } else if(numGen == 12){
        numOut = 10
        faceCard = "Q"
    } else if (numGen === 13){
        numOut = 10
        faceCard = "K"
    } else {
        numOut = numGen
    }
    return numOut
}

function printCards(){
    cardOneText.textContent = "Cards: "
    for (let i = 0; i < cardsInHand.length; i++) {
        cardOneText.textContent += cardsInHand[i] + ", "
        console.log(cardsInHand[i])
    } 
}