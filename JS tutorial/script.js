//Challenge 1: Your age in days

function ageInDays() {
    var birthYear = prompt("Enter your birth year: ");
    var result = (2022 - birthYear) * 365;
    var h1 = document.createElement('h1'); //new h1 tag is created
    var textAnswer = document.createTextNode('You are ' + result + ' days old.'); //a text is created
    h1.setAttribute('id', 'result'); //here id of h1 is set to result i.e the output ; unnecessary
    h1.appendChild(textAnswer); // here the text is being added to the h1 tag

    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('result').remove();

}


//Challenge 2:Cat Generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://cdn2.thecatapi.com/images/4ao.gif";
    div.appendChild(image);
}

//Challenge 3:Rock, Paper, Scissors
function rpsGame(YourChoice) {
    //console.log(YourChoice);

    var humanChoice, botChoice;
    humanChoice = YourChoice.id; //YourChoice.id will take the id from the html of THAT 
    botChoice = randomChoice(randomInt());
    console.log(botChoice);

    results = decideWinner(humanChoice, botChoice); //Human won{1,0} ; Draw {0.5,0.5} ; Bot won {0,1}
    console.log(results);

    message = finalMessage(results); //decides what to print and in what color ; returns in dictionary
    console.log(message);

    rps(humanChoice, botChoice, message); //for front-end 
}

function randomInt() {
    return Math.floor(Math.random() * 3);
}

function randomChoice(num) {
    return ['rock', 'paper', 'scissors'][num];
}

function decideWinner(YourChoice, botChoice) {
    var database = {
        'rock': {
            'scissors': 1,
            'rock': 0.5,
            'paper': 0
        },
        'paper': {
            'scissors': 0,
            'rock': 1,
            'paper': 0.5
        },
        'scissors': {
            'scissors': 0.5,
            'rock': 0,
            'paper': 1
        }
    }

    var yourScore = database[YourChoice][botChoice];
    var botScore = database[botChoice][YourChoice];

    return [yourScore, botScore];
}

function finalMessage([yourScore, botScore]) {
    if (yourScore === 0) {
        return { 'message': 'You Lost', 'color': 'red' };
    } else if (yourScore === 1) {
        return { 'message': 'You Won!', 'color': 'green' };
    } else if (yourScore === 0.5) {
        return { 'message': 'A tie', 'color': 'yellow' };
    }

}

function rps(humanImageChoice, botImageChoice, fMs) {
    var imagesDB = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    //creating div tags using js
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    //creating the image for human 
    humanDiv.innerHTML = "<img src='" + imagesDB[humanImageChoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);

    //creating the text 
    messageDiv.innerHTML = "<h1 style='color: " + fMs['color'] + "; font-size: 50px; padding: 30px; '>" + fMs['message'] + "</h1>";
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);

    //creating the image for bot 
    botDiv.innerHTML = "<img src = '" + imagesDB[botImageChoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>";
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

//Challenge 4:Change the color of all buttons
var all_buttons = document.getElementsByTagName('button'); // gets all the elements that have the tag button
//console.log(all_buttons);

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]); //adding buttons to the array 
}
console.log(copyAllButtons);

function changeColor(userChoice) {


    // console.log(userChoice.value);
    if (userChoice.value === 'random') {
        buttonRandom();
    } else if (userChoice.value === "Red") {
        buttonRed();
    } else if (userChoice.value === "Green") {
        buttonGreen();
    } else if (userChoice.value === "Yellow") {
        buttonYellow();
    } else if (userChoice.value === "reset") {
        buttonReset();
    }


}

function buttonRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonYellow() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }
}

function buttonRandom() {
    colorDB = ['btn-success', 'btn-danger', 'btn-warning', 'btn-primary'];
    for (let i = 0; i < all_buttons.length; i++) {
        randomNum = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(colorDB[randomNum]);
    }

}

function buttonReset() {
    var randomstuff = randomColor(randomNum());
    //console.log(randomstuff);
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }

}