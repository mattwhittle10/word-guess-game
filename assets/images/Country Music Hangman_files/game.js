// Arrays to store the different word that will be guessed.
var songs90s = ["chattahoochee", "thedance", "dustonthebottle", "itsyourlove", "indianoutlaw", "thinkinproblem", "shouldvebeenacowboy", "icrossmyheart", "dontrockthejukebox", "iminahurry", "bootscootinboogie", "thethunderrolls", "donttakethegirl", "carryingyourlovewithme", "lifesadance", "angelsamongus", "thiskiss", ];

//Variable used to generate a random song from the array
var randSongs90s = songs90s[Math.floor(Math.random() * songs90s.length)];
randSongs90s = randSongs90s.toUpperCase();

//blank array to hold the underscores
var underScore = [];
//blank array to hold the right letters guessed
var rightLetter = [];
//blank array to hold the wrong letters guessed
var wrongLetter = [];

//geting the myAudio ID to play music
var music = document.getElementById("myAudio"); 
                                      
function playAudio() { 
  music.play(); 
} 

function pauseAudio() { 
  music.pause(); 
} 

//DOM Manipulation to add underscores to array based on the length of the word that's randomly selected from the array
var underScoreDOM;
underScoreDOM = new Array(randSongs90s.length + 1).join("_");

//timer to check every second if the user has won the game or not yet
var bContinue = setInterval(function(){ checkWin(); }, 1000);

//event listener to recognize when key is pressed and get the keycode and hold it in a variable
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
               //Used to replace the character in the string with the correct letter
               underScoreDOM = underScoreDOM.substring(0, iPos) + keyLetter + underScoreDOM.substring(iPos+1);
               iPos = randSongs90s.indexOf(keyLetter, iPos + 1);
           }
       }
       //if user guesses wrong then push it to the wrongLetter array
       else
       {
           //if user guesses wrong then push it to the wrongLetter array
           wrongLetter.push(keyLetter);
           //write the wrong letters guessed inside id "wLBox"
           document.getElementById("wLBox").innerHTML = wrongLetter;
            }         
   }
   //DOM Manipulation to write dashes to the html page
   document.getElementById("dashes").innerHTML = underScoreDOM;
   //for loop to count the length of the wrong letter array to alert when you lose
   for(var i = 0; i < wrongLetter.length; i++) {
    if(i == 7){
        alert("You Lose");
        //reveal the correct word if user loses
        document.getElementById("dashes").innerHTML = randSongs90s;
    }   
    }
});

//function to alert user when they have won the game
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

