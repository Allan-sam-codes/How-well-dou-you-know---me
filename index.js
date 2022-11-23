var readlineSync = require('readline-sync')
var score = 0

var userName = readlineSync.question("Hi ! What is your name ? ")

console.log("      ")
console.log("welcome ! " + userName.toUpperCase() + " I think ALLAN is well known to you ! ", "\n")
console.log("Let see how well do you known him , " + userName.toUpperCase(), "\n")


function play(question, answer) {

  var userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right")
    score = score + 1

  } else {
    console.log("wrong")
    // score = score - 1
  }

  console.log("current score is ", score)
  console.log("------------------------")
}

console.log("-----------------------")

var question =
  [
    {
      question: "where do i live  ? ",
      answer: "trichy",
    },
    {
      question: "my favorite color would be ? ",
      answer: "red",
    },
    {
      question: "Am i working in company ? ",
      answer: "No",
    },
    {
      question: "which food did i like very much ? ",
      answer: "parotta",
    },
    {
      question: "Am i love to play Games ? ",
      answer: "yes",
    },
  ];

for (var i = 0; i < question.length; i++) {
  var currentQuestion = question[i];
  play(currentQuestion.question, currentQuestion.answer)
}


console.log("     ")
console.log("YAY ! YOU HAVE SCORED : ", score)
console.log("     ")

console.log("List of user who have scored at top ")
console.log("     ")


var highestScore = [
  {
    name: "Jackie",
    score: 5
  },
  {
    name: "Aneena",
    score: 5
  }
]
for (var i = 0; i < highestScore.length; i++) {
  var currentScore = highestScore[i]
  console.log("Name :", currentScore.name, "\nscore : ", currentScore.score)
}
