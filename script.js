// Creat array for all the questions


const data = [
  {
    id:1 ,
    question: "What is the name for the Jewish New Year?",
    answers: [
      {answer: "Hanukkah", isCorrect:false},
      {answer: "Yom Kippur", isCorrect:false},
      {answer: "Kwanza",isCorrect:false},
      {answer: "Rosh Hashanah", isCorrect:true}
    ]
  },
  {
    id:2 ,
    question: "How many blue stripes are there on the U.S. flag?",
    answers: [
      {answer: "6", isCorrect:false},
      {answer: "7",isCorrect:false},
      {answer: "13",isCorrect:true},
      {answer: "0",isCorrect:false}
    ]
  },
  {
    id:3 ,
    question: "Which one of these characters is not friends with Harry Potter?",
    answers: [
      {answer: "Draco Malfoy", isCorrect:true},
      {answer: "Ron Weasley",isCorrect:false},
      {answer: "Neville Longbottom",isCorrect:false},
      {answer: "Hermione Granger",isCorrect:false}
    ]
  },
  {
    id:4 ,
    question: "What was the name of the band Lionel Richie was a part of?",
    answers: [
      {answer: "King Harvest", isCorrect:false},
      {answer: "Spectrums", isCorrect:false},
      {answer: "Commodores", isCorrect:true},
      {answer: "The Marshall Tucker Band",isCorrect:false}
    ]
  },
  {
    id:5 ,
    question: "Which animal does not appear in the Chinese zodiac?",
    answers: [
      {answer: "Brazil",isCorrect:true},
      {answer: " Italy",isCorrect:false},
      {answer: "Ireland",isCorrect:false},
      {answer: "China",isCorrect:false}
    ]
  },
  {
    id:6 ,
    question: "Which planet is the hottest?",
    answers: [
      {answer: "Saturn",isCorrect:false},
      {answer: "Venus",isCorrect:true},
      {answer: "Mercury",isCorrect:false},
      {answer: "Mars",isCorrect:false}
    ]
  },
  {
    id:7 ,
    question: "Who was the only U.S. President to resign?",
    answers: [
      {answer: "Herbert Hoover",isCorrect:false},
      {answer: "Richard Nixon",isCorrect:true},
      {answer: "George W. Bush",isCorrect:false},
      {answer: "Barack Obama",isCorrect:false}
    ]
  },
  {
    id:8 ,
    question: "What does the “D” in “D-Day” stand for?",
    answers: [
      {answer: "Dooms",isCorrect:false},
      {answer: "Dark",isCorrect:false},
      {answer: "Day ",isCorrect:true},
      {answer: "Dunkirk",isCorrect:false}
    ]
  },
  {
    id:9 ,
    question: "Which water sport is the official sport for the state of Hawaii?",
    answers: [
      {answer: "water polo",isCorrect:false},
      {answer: "swimming",isCorrect:false},
      {answer: "water skiing",isCorrect:false},
      {answer: "surfing",isCorrect:true}
    ]
  },
  {
    id:10 ,
    question: "What is the name of the company that published the Mario Kart video game?",
    answers: [
      {answer: "Nintendo",isCorrect:false},
      {answer: "Electronic Arts (EA)",isCorrect:false},
      {answer: "SEGA",isCorrect:true},
      {answer: " Xbox",isCorrect:false}
    ]
  },
]

// Select all the class need 
const gameScreen = document.querySelector( ".game")
const resultScreen = document.querySelector(".result")
const question = document.querySelector( ".question")
const answerContainer = document.querySelector(".answer")
const submitQuestion = document.querySelector(".submit")
const playAgain = document.querySelector(".play")



// Declare All the Variables for the game

let gameIndex = 0
let correctAnswer = 0
let totalScore = 0
let wrongAnswer = 0
let selectedAnswer


// creat function to play again

const letPlay = () => {
   gameIndex = 0
   correctAnswer = 0
   totalScore = 0
   wrongAnswer = 0
displayQuestion(gameIndex)
}

playAgain.addEventListener("click", () => {
  
  letPlay()
  resultScreen.style.display = "none"
  gameScreen.style.display = "block"
})

// creat function to show the result

const showResultPage = () => {
  resultScreen.style.display = "block"
  gameScreen.style.display = "none"

  resultScreen.querySelector(".correct").textContent = `Correct Answers: ${correctAnswer}`
  resultScreen.querySelector(".wrong").textContent = `Wrong Answers: ${wrongAnswer}`
  resultScreen.querySelector(".score").textContent = `Score: ${(correctAnswer - wrongAnswer) * 10}`
  
}

// creat function to show the question

const displayQuestion = (qNumber) => {
  if(qNumber === data.length) return showResultPage()
  selectedAnswer = null
  question.textContent = data[qNumber].question;
  answerContainer.innerHTML = data[qNumber].answers.map((item, index) => 
  `
  <div class="answer">
      <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
      <label for="1">${item.answer}</label>
    </div>

  `
  ).join("");

  mySelectedAnswers()
}


// creat function to choose the options

const mySelectedAnswers = () => {
  answerContainer.querySelectorAll("input").forEach(el => {
    el.addEventListener('click', (e) => {
      selectedAnswer = e.target.value
    })
  })
} 

// creat function to submit Answer

const submitAnswer = () => {
  submitQuestion.addEventListener("click", () => {
    if(selectedAnswer !== null) {
      selectedAnswer === 'true' ? correctAnswer++ : wrongAnswer++
     gameIndex++
     displayQuestion(gameIndex)
    } else alert("Select an asnser!")
  })
}



displayQuestion(gameIndex)
submitAnswer()