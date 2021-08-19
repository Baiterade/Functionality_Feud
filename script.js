var startbtn = document.getElementById('startbtn');
var timer = document.getElementById('timer');
var question = document.getElementById('question');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');

var score = 0;
var secondsLeft = 0;
var i = 0;
var currentAnswer = '';
var correctAnswer = '';

timer.style.visibility = 'hidden';
question.style.visibility = 'hidden';
option1.style.visibility = 'hidden';
option2.style.visibility = 'hidden';
option3.style.visibility = 'hidden';
option4.style.visibility = 'hidden';

startbtn.addEventListener('click', quiz);

var qArray = [
    ['Inside which HTML element do we put JavaScript?', '<js>', '<script>', '<scripting>', '<javascript>', 'option2'],
    ['What is the correct syntax for referring to an external script called "xxx.js"?', '<script name="xxx.js">', '<js id="xxx.js">', '<script src="xxx.js">', '<script href="xxx.js">', 'option3'],
    ['How would you write "Hello World" in an alert box?', 'msg("Hello World");', 'alertBox("Hello World");', 'alert("Hello World");', 'msgBox("Hello World");', 'option3'],
    ['How do we write an IF statement in JavaScript?', 'if i = 5 then', 'if i = 5', 'if i == 5 then', 'if (i == 5)', 'option4'],
    ['How does a FOR loop start?', 'for (i = 0; i <= 5)', 'for (i <= 5; i++)', 'for i = 1 to 5', 'for (i = 0; i <= 5; i++)', 'option4']
];
qArray = qArray.sort(() => Math.random() - 0.5);

var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.innerHTML = secondsLeft;

    if (secondsLeft === 0 && i < 5) {

        finish();

    }

}, 1000);

function quiz() {

    secondsLeft = 30;
    i = 0;
    score = 0;

    startbtn.style.display = 'none';
    timer.style.visibility = 'visible';
    question.style.visibility = 'visible';
    option1.style.visibility = 'visible';
    option2.style.visibility = 'visible';
    option3.style.visibility = 'visible';
    option4.style.visibility = 'visible';

    questionGen();

}

function questionGen() {

    currentquestion = qArray[i];
    question.textContent = currentquestion[0];
    option1.textContent = currentquestion[1];
    option2.textContent = currentquestion[2];
    option3.textContent = currentquestion[3];
    option4.textContent = currentquestion[4];
    correctAnswer = currentquestion[5];

}

function evaluate() {

    if (currentAnswer == correctAnswer) {

        score++;

    } else {

        secondsLeft -= 5;

    }

    i++;

    if (i < 5) {

        questionGen();

    } else {

        finish();

    }
}

function finish() {

    startbtn.style.display = 'block';
    timer.style.visibility = 'hidden';
    option1.style.visibility = 'hidden';
    option2.style.visibility = 'hidden';
    option3.style.visibility = 'hidden';
    option4.style.visibility = 'hidden';

    question.textContent = "Final Score: " + score;

    sessionStorage.setItem(prompt("Enter your initials!"), score);

}

document.getElementById('option1').addEventListener("click", function () { currentAnswer = this.id; evaluate(); console.log(this.id); });
document.getElementById('option2').addEventListener("click", function () { currentAnswer = this.id; evaluate(); console.log(this.id);});
document.getElementById('option3').addEventListener("click", function () { currentAnswer = this.id; evaluate(); console.log(this.id);});
document.getElementById('option4').addEventListener("click", function () { currentAnswer = this.id; evaluate(); console.log(this.id);});