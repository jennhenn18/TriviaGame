// GLOBALVARIABLES

var correctAnswers = 0;
var incorrectAnswers = 0;
var timer = 100; 
var intervalId;
var answerArray = ["pill", "hunting", "beast", "nsync", "rebrandts", "atlanta", "taming", "adams"]
var userAnswer = [];

function pageLoad() {
    //hide questions
    $("#myForm").hide();

    //hide timer
    $("#counter").hide();

    //hide done button
    $("#done").hide();

    //hide scorecard
    $("#score").hide();

    //display start button
    $("#start").show();
}

pageLoad(window.onload);


/////////////////// EVENT LISTENERS //////////////////
$("#start").on("click", start);
$("#done").on("click", done);


////////////////// START FUNCTION ////////////////

    function start() {

         //reset variables
        correctAnswers = 0;
        incorrectAnswers = 0;
        timer = 100; 
        userAnswer = [];
        clearInterval(intervalId);

        $("#myForm").trigger("reset");
        
        //display timer
        $("#counter").show();
        
        //display questions
        $("#myForm").show();
        
        //display done button
        $("#done").show();

        //hide start button
        $("#start").hide();

        //start timer
        intervalId = setInterval(decrement, 1000);
        
    }

    //function to decrement timer by 1
    function decrement() {

        timer--;

        //display timer
        $("#clock").html(timer + " seconds");

        // stop game when time runs out
        if (timer <= 0) {
            clearInterval(intervalId);
            alert("Time Up!");
            pageLoad();
        }
    }

////////////////// END START FUNCTION ////////////////


////////////////// START DONE FUNCTION ///////////////

    function done(arr) {

        // store user inputs
        var input1 = $("#question-1 [name=album]:checked").val();
        var input2 = $("#question-2 [name=oscar]:checked").val();
        var input3 = $("#question-3 [name=movie]:checked").val();
        var input4 = $("#question-4 [name=band]:checked").val();
        var input5 = $("#question-5 [name=song]:checked").val();
        var input6 = $("#question-6 [name=olympics]:checked").val();
        var input7 = $("#question-7 [name=play]:checked").val();
        var input8 = $("#question-8 [name=show]:checked").val();

        console.log("Input 1: " + input1);
        console.log("Input 2: " + input2);
        console.log("Input 3: " + input3);
        console.log("Input 4: " + input4);
        console.log("Input 5: " + input5);
        console.log("Input 6: " + input6);
        console.log("Input 7: " + input7);
        console.log("Input 8: " + input8);


        // push inputs into userAnswer array
        userAnswer.push(input1)
        userAnswer.push(input2)
        userAnswer.push(input3)
        userAnswer.push(input4)
        userAnswer.push(input5)
        userAnswer.push(input6)
        userAnswer.push(input7)
        userAnswer.push(input8)

        console.log("User answers: " + userAnswer);

    // loop through answer array
    for (i =0; i < answerArray.length; i++) {
        
        // compare answer array against user answer array
        if (answerArray[i] === userAnswer[i]) {
            //add one to correct answers
            correctAnswers++;
            
             //if an answer is null alert the user
            } else if (answerArray[i] === '') {
               
                alert("Oops! You left a question blank. Please go back and complete all questions.")
            } else {
                // else add one to incorrect answers
                incorrectAnswers++;
                
            }
    } console.log("Correct answers: " + correctAnswers);
    console.log("Incorrect answers: " + incorrectAnswers);

    //hide start button
    $("#start").hide();

    //hide timer
    $("#counter").hide();

    //hide form
    $("#myForm").hide();

    //hide done button
    $("#done").hide();

    // display score and restart button
    $("#score").show();

    // display correct answers
    $("#correct-count").html(correctAnswers);
    console.log(correctAnswers);

    // display incorrect answers
    $("#incorrect-count").html(incorrectAnswers);
    console.log(incorrectAnswers);

    }


/////////// RESTART GAME ///////////////

//go back to start page
$("#restart").on("click", pageLoad);

    
