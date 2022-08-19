const form = document.getElementById("form");
const quesEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score")


const num1 = Math.floor(Math.random()*10);
const num2 = Math.floor(Math.random()* 12);

let score = JSON.parse(localStorage.getItem("score"));

if (!score){
    score = 0;
}

scoreEl.innerText = `score: ${score}`

quesEl.innerText = `What is ${num1} multiply by ${num2}?`

const answer = num1 * num2;


form.addEventListener('submit', function(){
    const userVal = +inputEl.value;

    if (userVal === answer){
        score ++
        updateLocalStorage()
    } else {
        score--
        updateLocalStorage();
    }
})

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}