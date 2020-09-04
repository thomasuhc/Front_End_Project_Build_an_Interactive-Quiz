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
                    quizOver =true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
        }
    });
});

