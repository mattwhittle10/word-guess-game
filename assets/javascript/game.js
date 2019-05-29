// Arrays to store the different word that will be guessed.
var songs90s = ["chattahoochee", "thedance", "dustonthebottle", "itsyourlove", "indianoutlaw", "thinkinproblem", "shouldvebeenacowboy", "icrossmyheart", "dontrockthejukebox", "iminahurry", "bootscootinboogie", "thethunderrolls", "donttakethegirl", "carryingyourlovewithme", "lifesadance", "angelsamongus", "thiskiss", ];

var randSongs90s = songs90s[Math.floor(Math.random() * songs90s.length)];
console.log(randSongs90s);
randSongs90s = randSongs90s.toUpperCase();

var underScore = [];
console.log(underScore);
var rightLetter = [];
var wrongLetter = [];
// DOM Manipulation

var x = document.getElementById("myAudio"); 
                                      
function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 

var underScoreDOM;
underScoreDOM = new Array(randSongs90s.length + 1).join("_");

//I had to do this because I originally had the you win alert in the keypress listener
//and the alert would display before the very last character was written
//By adding this setInterval it makes a little timer that says, every 1 second
//check to see if the player won the game yet
var bContinue = setInterval(function(){ checkWin(); }, 1000);

document.addEventListener('keypress', (event) => {

   var keyLetter = String.fromCharCode(event.keyCode);
   var iPos; //Holds the position of the character found in the array
   keyLetter = keyLetter.toUpperCase();

   if (keyLetter != " ")
   {
       iPos = randSongs90s.indexOf(keyLetter, 0);

       if (iPos >= 0)
       {
           while (iPos != -1)
           {
               //if user guesses right then push it to the rightLetter array
               rightLetter.push(keyLetter);
               console.log(rightLetter);
               //I had to do this because strings in javascript are immutable
               //So instead of just going to a specific char in the array of string
               //I had to do this to replace a char in that string
               underScoreDOM = underScoreDOM.substring(0, iPos) + keyLetter + underScoreDOM.substring(iPos+1);
               iPos = randSongs90s.indexOf(keyLetter, iPos + 1);
           }
       }
       //if user guesses wrong then push it to the wrongLetter array
       else
       {
           wrongLetter.push(keyLetter);
           console.log(wrongLetter);
           //write the wrong letters guessed inside id "wLBox"
           document.getElementById("wLBox").innerHTML = wrongLetter;
            }         
   }
   //get id from html to write the dashes to
   document.getElementById("dashes").innerHTML = underScoreDOM;
   //for loop to count the length of the wrong letter array to alert when you lose
   for(var i = 0; i < wrongLetter.length; i++) {
    if(i == 7){
        alert("You Lose");
        //reveal the correct word
        document.getElementById("dashes").innerHTML = randSongs90s;
    }   
    }
});

function checkWin()
{
   var iUnderScorePos = underScoreDOM.indexOf("_", 0);

   if (iUnderScorePos == -1)
   {
       alert("You Win!");
       //Used to clear the timer
       clearInterval(bContinue);
   }

}

