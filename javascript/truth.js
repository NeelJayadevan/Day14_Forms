let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");

    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname;
}

function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer");

    // get values from form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    // give result based on what they selected
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth?";
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten tuna = yuck!";
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!";
    }
}

function truthlie() {
    let truthlieAnswer = document.getElementById("truthlie-answer");

    // get values from form
    let truth1Selected = document.getElementById("truth1").checked;
    let truth2Selected = document.getElementById("truth2").checked;
    let lieSelected = document.getElementById("lie").checked;

    // give result based on what they selected
    if (truth1Selected) {
        truthlieAnswer.innerHTML = fname + ", you are wrong.";
    }
    else if (truth2Selected) {
        truthlieAnswer.innerHTML = fname + ", you are incorrect.";
    }
    else if (lieSelected) {
        truthlieAnswer.innerHTML = fname + ", you are correct!";
    }
}