// Arrays to store the different word that will be guessed. 

// var songs90s = ["and"];
var songs90s = ["chattahoochee", "thedance", "dustonthebottle", "itsyourlove", "indianoutlaw", "thinkinproblem", "shouldvebeenacowboy", "icrossmyheart", "dontrockthejukebox", "iminahurry", "bootscootinboogie", "thethunderrolls", "donttakethegirl", "carryingyourlovewithme", "lifesadance", "angelsamongus", "thiskiss", ];
// var songs2000s = ["I Hope You Dance", "Chicken Fried", "Jesus Take the Wheel", "Love Story", "The House That Built Me", "Remember When", "Suds in the Bucket", "Mud on the Tires", "When I Get Where I'm Going", "You'll Think of Me", "Live Like You Were Dying", "Big Green Tractor", "What Hurts the Most", "Need You Now", "Beer for My Horses", "Life Is a Highway", "If You're Going Through Hell"];
// var artists90s = ["Brooks and Dunn", "Martina McBride", "Lonestar", "LeAnn Rimes", "Alan Jackson", "Garth Brooks", "Tim McGraw", "Faith Hill", "George Strait", "Shania Twain", "Dixie Chicks", "Reba McEntire", "Alabama", "Toby Keith", "Trisha Yearwood", "Deana Carter", "Trace Adkins", "Brad Paisley", "Dolly Parton", "Kenny Rogers", "Rodney Atkins"];
// var artists2000s = ["Taylor Swift", "Carrie Underwood", "Luke Bryan", "Jason Aldean", "Miranda Lambert", "Blake Shelton", "Rascal Flatts", "Keith Urban", "Dierks Bentley", "Big and Rich", "Sugarland", "Jake Owen", "Eric Church", "Lady Antebellum", "The Band Perry", "Zac Brown Band", "Little Big Town", "Josh Turner", "Kenny Chesney", "Ryan Shupe and the Rubberband"];

//function that will select which array the user wants



//function that will be used to randomly select and pull an object from the array.

var randSongs90s = songs90s[Math.floor(Math.random() * songs90s.length)];
console.log(randSongs90s);

var underScore = randSongs90s.length;
console.log(underScore);
var rightLetter = [];
var wrongLetter = [];
// DOM Manipulation

var underScoreDOM = Array(randSongs90s.length + 1).join(" _ ");
document.getElementsByClassName('dashes');
console.log(underScoreDOM);

// var randSongs2000s = songs2000s[Math.floor(Math.random() * songs2000s.length)];
// console.log(randSongs2000s);

// var randArtists90s = artists90s[Math.floor(Math.random() * artists90s.length)];
// console.log(randArtists90s);

// var randArtists2000s = artists2000s[Math.floor(Math.random() * artists2000s.length)];
// console.log(randArtists2000s);

//create underscores based on length of string in array that is selected.

// console.log(generateUnderScore());

//function that will log the users guesses.

document.addEventListener('keypress', (event) => {
    var keyLetter= String.fromCharCode(event.keyCode);
    // console.log(keyLetter);
//compare it to the word that was selected from the array
    if(randSongs90s.indexOf(keyLetter) > -1) {
    //if user guesses right then push it to the rightLetter array
        rightLetter.push(keyLetter);
        console.log(rightLetter);
    //When the user guesses the letter right have a function that will replace the underscore
        underScore[randSongs90s.indexOf(keyLetter)] = keyLetter;
    //DOM Manipulation that puts the correct number of underscores based on what word is selected.
        underScoreDOM[0].innerHTML = underScore.join(' ');
        console.log(underScore);
    if(underScore.join('') == randSongs90s) {
        alert("Winner");
    }
}
    //if user guesses wrong then push it to the wrongLetter array
    else {
        wrongLetter.push(keyLetter);
        console.log(wrongLetter);   
    }

});
//When the user guesses the letter right have a function that will replace the underscore
// underScoreDOM.innerHTML = generateUnderScore().join('');

//function that will count the number of attempts.

//function that will input the correct letter if it's guessed by the user.

//loops that will be used when entering in letters to check for any matching letters on the object that was pulled from the array.

//alert that will tell the user if they have won or lost.