//START MESSAGE ELEMENT
const startMessage = document.getElementById("start-msg")
const startButton = document.getElementById("start-btn")

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

//TIMER
let currentTime = 60
const timeRemaining = document.getElementById("time-remaining")
function startCountDown() {
    setInterval(function(){ 
        currentTime--
        timeRemaining.innerHTML = currentTime
    }, 1000);
}

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
}, currentTime*1000);

//GAME FUNCTIONS

function startGame(){
    startButton.classList.add("hide")
    startMessage.classList.add("hide")
    titleImage.classList.remove('hide')
    levelText.classList.remove('hide')
    timerText.classList.remove('hide')
    lettersImage1.classList.remove('hide')
    questionText.classList.remove('hide')
    answerBox.classList.remove('hide')
    submitButton.classList.remove('hide')
    questionText.innerHTML = questionBank[0]
    questionIndex = 1
    currentTime = 60
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
