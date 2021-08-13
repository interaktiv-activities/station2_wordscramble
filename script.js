//SOUNDS
var correctSound = new Audio()
correctSound.src = "SOUNDS/match.wav"

var incorrectSound = new Audio()
incorrectSound.src = "SOUNDS/gameover.wav"

var winSound = new Audio()
winSound.src = "SOUNDs/victory.wav"

var backgroundMusic = new Audio();
backgroundMusic.src = "SOUNDS/happy.mp3"

window.addEventListener("click", () => {
  if (questionIndex > 9){
    backgroundMusic.pause()
  } else if (currentTime == 0){
    backgroundMusic.pause()
  } else if (currentTime > 0){
    backgroundMusic.play()
    backgroundMusic.volume = 0.1
    backgroundMusic.loop = true
  }
})

//START MESSAGE ELEMENT
const countdown = document.getElementById("countdown")
const countdownText = document.getElementById("countdown-text")

//QUIZ ELEMENTS
const titleImage = document.getElementById("title-img")
const levelText = document.getElementById("level-text")
const timerText = document.getElementById("timer")
const questionText = document.getElementById("question-text")
const answerBox = document.getElementById("answer-box")
const submitButton = document.getElementById("submit-btn")

//LETTERS
const lettersImage1 = document.getElementById("letters-img1")
const lettersImage2 = document.getElementById("letters-img2")
const lettersImage3 = document.getElementById("letters-img3")
const lettersImage4 = document.getElementById("letters-img4")
const lettersImage5 = document.getElementById("letters-img5")
const lettersImage6 = document.getElementById("letters-img6")
const lettersImage7 = document.getElementById("letters-img7")
const lettersImage8 = document.getElementById("letters-img8")
const lettersImage9 = document.getElementById("letters-img9")
const lettersImage10 = document.getElementById("letters-img10")

//PASS PAGE
const passMessage = document.getElementById("pass-msg")
const failMessage = document.getElementById("fail-msg")
const menuButton = document.getElementById("menu-btn")

//QUESTION COUNTER
let questionIndex = 0

//COUNTDOWN
let countdownTime = 5
var countdownInterval = setInterval(function(){
    countdownTime--
    countdownText.innerHTML = countdownTime

    if (countdownTime == 0){
        startGame()
        clearInterval(countdownInterval)

        window.removeEventListener("click", backgroundMusic.play)
    }
}, 1000)

//TIMER
let currentTime = 95
const timeRemaining = document.getElementById("time-remaining")
setInterval(function(){ 
    currentTime--
    timeRemaining.innerHTML = currentTime
}, 1000);

var failCounter = setInterval(function(){ 
    lettersImage1.classList.add('hide')
    lettersImage2.classList.add('hide')
    lettersImage3.classList.add('hide')
    lettersImage4.classList.add('hide')
    lettersImage5.classList.add('hide')
    lettersImage6.classList.add('hide')
    lettersImage7.classList.add('hide')
    lettersImage8.classList.add('hide')
    lettersImage9.classList.add('hide')
    lettersImage10.classList.add('hide')
    titleImage.classList.add('hide')
    levelText.classList.add('hide')
    timerText.classList.add('hide')
    lettersImage1.classList.add('hide')
    questionText.classList.add('hide')
    answerBox.classList.add('hide')
    submitButton.classList.add('hide')
    failMessage.classList.remove('hide')
    backgroundMusic.pause()
    incorrectSound.play()
}, currentTime*1000);

//GAME FUNCTIONS
addEventListener('keypress', function (e){
    if (e.key === 'Enter') {
        submitAnswer()
    }
})

function startGame(){
    countdown.classList.add("hide")
    countdownText.classList.add("hide")
    titleImage.classList.remove('hide')
    levelText.classList.remove('hide')
    timerText.classList.remove('hide')
    lettersImage1.classList.remove('hide')
    questionText.classList.remove('hide')
    answerBox.classList.remove('hide')
    submitButton.classList.remove('hide')
    questionText.innerHTML = questionBank[0]
    questionIndex = 1
    currentTime = 90
    startCountDown()
}

function submitAnswer(){
    var answerValue = answerBox.value
    switch(questionIndex){
        case 1:
            if (answerValue == "FINANCE"){
                questionIndex++
                lettersImage1.classList.add('hide')
                lettersImage2.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = questionBank[(questionIndex - 1)]
                answerBox.value = ""
                correctSound.play()
            } else {
                alert("INCORRECT! Please Try Again!")
            }
            break;
        case 2:
            if (answerValue == "CPU"){
                questionIndex++
                lettersImage2.classList.add('hide')
                lettersImage3.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = questionBank[(questionIndex - 1)]
                answerBox.value = ""
                correctSound.play()
            } else {
                alert("INCORRECT! Please Try Again!")
            }
            break;
        case 3:
            if (answerValue == "REGISTRAR"){
                questionIndex++
                lettersImage3.classList.add('hide')
                lettersImage4.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = questionBank[(questionIndex - 1)]
                answerBox.value = ""
                correctSound.play()
            } else {
                alert("INCORRECT! Please Try Again!")
            }
            break;
        case 4:
            if (answerValue == "MINISTRY"){
                questionIndex++
                lettersImage4.classList.add('hide')
                lettersImage5.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = questionBank[(questionIndex - 1)]
                answerBox.value = ""
                correctSound.play()
            } else {
                alert("INCORRECT! Please Try Again!")
            }
            break;
        case 5:
            if (answerValue == "CAREER"){
                questionIndex++
                lettersImage5.classList.add('hide')
                lettersImage6.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = questionBank[(questionIndex - 1)]
                answerBox.value = ""
                correctSound.play()
            } else {
                alert("INCORRECT! Please Try Again!")
            }
            break;
        case 6:
            if (answerValue == "SCHOLARSHIP"){
                questionIndex++
                lettersImage6.classList.add('hide')
                lettersImage7.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = questionBank[(questionIndex - 1)]
                answerBox.value = ""
                correctSound.play()
            } else {
                alert("INCORRECT! Please Try Again!")
            }
            break;
        case 7:
            if (answerValue == "BENIRE"){
                questionIndex++
                lettersImage7.classList.add('hide')
                lettersImage8.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = questionBank[(questionIndex - 1)]
                answerBox.value = ""
                correctSound.play()
            } else {
                alert("INCORRECT! Please Try Again!")
            }
            break;
        case 8:
            if (answerValue == "ADVISER"){
                questionIndex++
                lettersImage8.classList.add('hide')
                lettersImage9.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = questionBank[(questionIndex - 1)]
                answerBox.value = ""
                correctSound.play()
            } else {
                alert("INCORRECT! Please Try Again!")
            }
            break;
        case 9:
            if (answerValue == "AKIC"){
                questionIndex++
                lettersImage9.classList.add('hide')
                lettersImage10.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = questionBank[(questionIndex - 1)]
                answerBox.value = ""
                correctSound.play()
            } else {
                alert("INCORRECT! Please Try Again!")
            }
            break;
        case 10:
            if (answerValue == "SERVICES"){
                questionIndex++
                lettersImage10.classList.add('hide')
                titleImage.classList.add('hide')
                levelText.classList.add('hide')
                timerText.classList.add('hide')
                lettersImage1.classList.add('hide')
                questionText.classList.add('hide')
                answerBox.classList.add('hide')
                submitButton.classList.add('hide')
                passMessage.classList.remove('hide')
                menuButton.classList.remove('hide')
                clearInterval(failCounter)
                answerBox.value = ""
                winSound.play()
                backgroundMusic.pause()
            } else {
                alert("INCORRECT! Please Try Again!")
            }
            break;
    }
}

var questionBank = [
    "The ______________ Department is committed to safeguarding and managing the institution’s resources, accounting, and financial affairs.",
    "This Unit under the Center for Student Life is tasked to provide resources and services to assist in meeting the needs relative to career development, career experiences, and employment/business opportunities for the mutual benefit of the employers and the CSB community.",
    "Personnel who maintains students’ academic records and other documents relevant to academic residence, ensuring confidentiality of student records at all times.",
    "Office for Student Accompaniment of the Center of Lasallian ___________ provides all retreats and recollections for the students of the College.",
    "___________ Information Services are services intended to help students broaden their awareness on options for employment and available educational choices through the mediums of the career portal and bulletin board.",
    "_________ is a grant or a form of support for a student's education. It can be Academic, Financial Grants, or Government-Mandated Grants",
    "Stands for Benildean Reflection Encounter as the recollection and retreat code.",
    "Personnel who’s assigned to a specific college for guidance in the academic curriculum and course sequence.",
    "It is a campus in DLS-CSB for the International Hospitality Management or IHM and the School of Hotel, Restaurant, and Institution Management or SHRIM students.",
    "The Benilde Well-being Center (BWC) provides _________ to the Benildean community such as counseling for those who experience personal issues, career concerns, or psychological problems, and help Benildeans in their educational objectives and goals"
];
