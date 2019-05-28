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
            for(var i = 0; i <wrongLetter.length; i++) {
                console.log(wrongLetter.length[i]);
                if(wrongLetter.length == 7) {
                    alert("You Lose");
                }
                else if(wrongLetter.length == 6) {
                    alert("Last guess make it count!");
                }
            }
        
       }  
   }
   //write the number of dashes to the id "dashes"
   document.getElementById("dashes").innerHTML = underScoreDOM;

});

function checkWin()
{
   var iUnderScorePos = underScoreDOM.indexOf("_", 0);

   if (iUnderScorePos == -1)
   {
       alert("You Win!");
       //This clears the timer
       clearInterval(bContinue);
   }
}

