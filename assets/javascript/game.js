// Arrays to store the different word that will be guessed. 

var songs90s = ["Chattahoochee", "The Dance", "Dust On The Bottle", "It's Your Love", "Indian Outlaw", "Thinkin Problem", "Should've Been a Cowboy", "I Cross My Heart", "Don't Rock the Jukebox", "I'm In a Hurry", "Boot Scootin Boogie", "The Thunder Rolls", "Don't Take the Girl", "Carrying Your Love With Me", "Life's a Dance", "Angels Among Us", "This Kiss", ];
var songs2000s = ["I Hope You Dance", "Chicken Fried", "Jesus Take the Wheel", "Love Story", "The House That Built Me", "Remember When", "Suds in the Bucket", "Mud on the Tires", "When I Get Where I'm Going", "You'll Think of Me", "Live Like You Were Dying", "Big Green Tractor", "What Hurts the Most", "Need You Now", "Beer for My Horses", "Life Is a Highway", "If You're Going Through Hell"];
var artists90s = ["Brooks and Dunn", "Martina McBride", "Lonestar", "LeAnn Rimes", "Alan Jackson", "Garth Brooks", "Tim McGraw", "Faith Hill", "George Strait", "Shania Twain", "Dixie Chicks", "Reba McEntire", "Alabama", "Toby Keith", "Trisha Yearwood", "Deana Carter", "Trace Adkins", "Brad Paisley", "Dolly Parton", "Kenny Rogers", "Rodney Atkins"];
var artists2000s = ["Taylor Swift", "Carrie Underwood", "Luke Bryan", "Jason Aldean", "Miranda Lambert", "Blake Shelton", "Rascal Flatts", "Keith Urban", "Dierks Bentley", "Big and Rich", "Sugarland", "Jake Owen", "Eric Church", "Lady Antebellum", "The Band Perry", "Zac Brown Band", "Little Big Town", "Josh Turner", "Kenny Chesney", "Ryan Shupe and the Rubberband"];

//function that will select which array the user wants



//function that will be used to randomly select and pull an object from the array.

var randSongs90s = songs90s[Math.floor(Math.random() * songs90s.length)];
console.log(randSongs90s);

var randSongs2000s = songs2000s[Math.floor(Math.random() * songs2000s.length)];
console.log(randSongs2000s);

var randArtists90s = artists90s[Math.floor(Math.random() * artists90s.length)];
console.log(randArtists90s);

var randArtists2000s = artists2000s[Math.floor(Math.random() * artists2000s.length)];
console.log(randArtists2000s);

//create underscores based on length of string in array that is selected.

//variable that will be used to store the object that was pulled from the array.

//blank array that the user will be prompted to enter a letter into each time limiting them to 7 attempts before they lose.

//function that will count the number of attempts.

//function that will input the correct letter if it's guessed by the user.

//loops that will be used when entering in letters to check for any matching letters on the object that was pulled from the array.

//alert that will tell the user if they have won or lost.