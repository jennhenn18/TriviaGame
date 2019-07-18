// GLOBALVARIABLES

var correctAnswers = 0;
var incorrectAnswers = 0;
var timer = 100; 
var intervalId;



//link HTML buttons to functions and runs upon page load
window.onload = function() {
    $("#start").on("click", start);
    $("#done").on("click", done);

    // //hide questions
    // $("#myForm").hide();

    // //hide timer
    // $("#counter").hide();

    // //hide done button
    // $("#done").hide();
};

//ON PAGE LOAD
//hide time remaining
//hide questions
//hide done button

///////////// OBJECTS

var answer1 = {
    correct: "pill",
    incorrect: "spice"
};

var answer2 = {
    correct: "titanic",
    incorrect: "hunting"
};

////////////////// START FUNCTION ////////////////

    function start() {

        //reset variables
        correctAnswers = 0;
        incorrectAnswers = 0;
        timer = 100; 
        intervalId;

        // //display questions
        // $("#myForm").show();
        
        // // //display timer
        // $("#counter").show();

        // //hide start button
        // $("#start").hide();

        //start timer
        intervalId = setInterval(decrement, 1000);
        
    }

    //function to decrement timer by 1
    function decrement() {

        timer--;

        //display timer
        $("#clock").html(timer + " seconds");

        // stop game when time runs out
        if (timer === 0) {
            stop();
            alert("Time Up!");
        }
    }

////////////////// END START FUNCTION ////////////////


////////////////// START DONE FUNCTION ///////////////

    function done() {

        //// CHECK QUESTION 1 ////
            //find answer selected for question
            var input1 = $("#question-1 [name=album]:checked").val();
            console.log(input1);

            //conditional to check answer
            if (input1 === answer1.correct) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
                console.log(correctAnswers);
                console.log(incorrectAnswers);
            }

        //// CHECK QUESTION 2 ////
            //find answer selected for question

            var input2 = $("#question-2 [name=oscar]:checked").val();
            console.log(input2);

            //conditional to check answer
            if (input2 === answer2.correct) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
                // console.log(correctAnswers);
                // console.log(incorrectAnswers);
            }




    }

//ONCLICK DONE
//hide questions
//return incorrect answers
//return correct answers
//return unanswered
//display "try again button"

//ONCLICK TRY AGAIN
//return to page load
//reset all variables
