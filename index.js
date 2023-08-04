var randomNumber1 = Math.floor(Math.random() * 6 + 1)

var randomDiceImage = "dice" + randomNumber1 + ".png"
var randomDiceSrc = "./images/" + randomDiceImage
document.querySelector(".img1").setAttribute("src", randomDiceSrc)

var randomNumber2 = Math.floor(Math.random() * 6 + 1)
var randomDiceImage2 = "dice" + randomNumber2 + ".png"
var randomDiceSrc2 = "./images/" + randomDiceImage2
document.querySelector(".img2").setAttribute("src", randomDiceSrc2)

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Player 1 wins!"
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerText = "Player 2 wins!"
}else{
    document.querySelector("h1").innerText = "Draw!"
}