//alert("JavaScript works!");

// Dominique Houston
// SDI 1304
// Project 2
// Continued Javascript Learning
/*
A recording artist var recordingArist = "Britney Spears" will be performing a show for a promotional tour every night for a week. showsPerWeek = 7. daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].

Every night she must perform for fans var performShow = function (daysOfTheWeek). At the end of every day she would like to know how many shows are left while var (showsRemain > 0), so please inform her immediately.

For each day that has passed, the number of shows left will decrease (var showNumber = 0; showNumber < daysOfTheWeek.length; showNumber++).

You are not to look at her nor are you allowed to respond directly to her, you must relayMessageTo = function(person,message){...}, to which you will normally receive a reply along the lines of recordingArtist + " says thank you."

Though you may get used to it, you won't be able to help by wonder if (staff.talkToHer()) when she responds.
*/

// My Global variables
var recordingArtist = "Britney Spears";
var daysPerWeek = 7;
var showsPerWeek = 7;
var songsPerShows = 12;
var showDurationMins = 60;
var weeksPerforming = 2;
var totalShows = 14;
var daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",];
var showsBooked = true;
var soldOut = true;
var inCity = true;



// My outputs
console.log(recordingArtist + " will be embarking on a tour for " + weeksPerforming + " weeks. She will perform every night until there are no more shows. There are " + showsPerWeek + " shows per week.  Since there are " + daysPerWeek + " days in a week, and she will be performing for " + weeksPerforming + " weeks, there will be a total of " + totalShows + " shows." )


 // Determine How Long Each Song Will Be During The Concert
var performShow = function (showDurationMins,songsPerShows) {
	var outcome = showDurationMins / songsPerShows;
		return outcome;
};
var returnSongDuration = performShow(60,5);


// My procedure 
if (recordingArtist == "Britney Spears") {
	performShow(60,15);
} else {
	console.log("We do not have information for that artist.");
}

// My boolean functions 
 // Determine How Many minutes will be performed per week
if (showsBooked && soldOut == true) {
 minsPerWeek = function (showDurationMins,showsPerWeek) {
	var outcome =  showsPerWeek * showDurationMins;
		console.log("Each week " + recordingArtist + " will perform for a total of " + outcome + " minutes.");
		}; 
} else {
minsPerWeek = function (showDurationMins,showsPerWeek) {
	var outcome =  showsPerWeek * showDurationMins;
		console.log("No shows have been booked.");
		}; 
}

if (showsBooked && soldOut == true, inCity == false) {
 inTown = function (showDurationMins,showsPerWeek) {
	var outcome =  showsPerWeek * showDurationMins;
		console.log("If the show is booked and sold out, but " + recordingArtist + "is not able to travel for whatever reason, " + recordingArtist + " will not be in town to perform.");
		}; 
} else {
  inTown = function (showDurationMins,showsPerWeek) {
	var outcome =  showsPerWeek * showDurationMins;
		console.log("If the show is booked and sold out and " + recordingArtist + " is able to travel, " + recordingArtist + " will be in town to perform.");
		}; console.log(" ");
}
	
// My number function + While Loop

var songCountdown = function (songs) {
	while (songs > 0) {
		songs = songs - 1;
		if (songs > 0) {
			console.log("Miss Spears, that was a great performance.");
			console.log(songs + "  left on the setlist.");
			if (songs == 1) {
					console.log("This is the last song.");
				}
		} 
		else {
			console.log("No more numbers left to perform.");
		}
		console.log(" ");
	}
}

// My array function + For Loop

var songCountUp = function(days,howMany) {
	for (var i = 0; i <= daysOfTheWeek.length; i++){
		console.log("You will be performing on every " + days + " including " + daysOfTheWeek[i]);
		
		if (i < howMany) {
			console.log("There are still upcoming performances.");
		} else {
			console.log("The tour has been completed.");
		}
		console.log(" ");
	}
}


// String function

var giveThanks = function(closingSong,encoreSong) {
	console.log("The closing song will be " + closingSong +", and the encore song will be " + encoreSong + ".");
}

// My functions
console.log("Each song performed will be " + returnSongDuration + " minutes.");
console.log(" ");

minsPerWeek(60,8);
console.log(" ");

inTown(50,6);
console.log(" ");

songCountdown(12);
console.log(" ");

songCountUp("nights",7);
console.log(" ");

giveThanks("\"Till The World Ends\"","\"...Baby One More Time\"");