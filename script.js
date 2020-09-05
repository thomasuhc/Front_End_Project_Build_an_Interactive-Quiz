var questions =[{
    question: "Which one of these characters is not friends with Harry Potter?",
    Choices: ["Ron Weasley","Neville Longbottom","Draco Malfoy","Hermione Granger"],
    CorrectAnswer: 2
},{
    question: "Which animal does not appear in the Chinese zodiac?",
    Choices: ["Dragon","Rabbit","Dog","Hummingbird"],
    CorrectAnswer: 3
},{
    question: "Which one of these characters aren’t a part of the Friends group?",
    Choices: ["Gunther","Joey","Gunther","Rachel"],
    CorrectAnswer: 0
},{
    question: "What language is the most spoken worldwide?",
    Choices: ["Spanish","English","Arabic","Chinese"],
    CorrectAnswer: 3
},{
    question: "Which New York City building is the tallest?",
    Choices: ["Bank of America Tower","One World Trade Center","Empire State Building","Statue of LibertyStatue of Liberty"],
    CorrectAnswer: 2
}];

var currentQuestion = 0;
var currentAnswers = 0;
var quizOver = false;

$(document).ready(function () {
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("Click", function(){
        if(!quizOver) {
            value = $("input[type='radio']:checked").val();
            if(value == undefined) {
                $(document).find(".quizMessage").text("Please Select an Answer");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();
                if (value == questions[currentQuestion].correctAnswer){
                    correctAnswer++;
                }
                currentQuestion++
                if (currentQuestion < questions.length){
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
        }
    });
});

function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].Choices.length;

    $(questionClass).text(question);

    $(choiceList).find("li").remove();

    var choice;
        for (i = 0; i < numChoices; i++) {
            choice = questions[currentQuestion].choices[i];
            $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
        }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswer = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You Scored: " + CorrectAnswer + "out of:" + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore () {
    $(document).find(".result").hide();
}