let quest = Array["24*60", "f(x)= 4+8x"]
let choice1 = Array["1440", "m=8"]
let choice2 = Array["144", "m=4"]
let choice3 = Array["2650", "m=12"]
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")

button1.addEventListener(click, changeColor)
button2.addEventListener(click, buttonTitle)

function changeColor(){
    document.style.backgroundColor = "red"
}

function buttonTitle(){
    document.style.backgroundColor = "orange"
}

