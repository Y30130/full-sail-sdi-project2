//alert("JavaScript works!");

// Dominique Houston
// SDI 1304
// Project 1
// Javascript Introduction

// My variables
var recordingArtist = "Britney Spears";
var hasFans = true;
var numOfFans = 500;
var albumTitle = "\"Femme Fatale\" Special Edition"; 

// My outputs
console.log("My favorite singer is " + recordingArtist + ".");
console.log("The rumors are " + hasFans + " that if over " + numOfFans + " fans show up early, with a copy of " + albumTitle + "they will receive a copy of " + albumTitle + " signed by Britney herself.");

// My conditionals
if (hasFans === true) {
	
	if (numOfFans >= 500) {
	numOfFans = numOfFans + 1;
	
		console.log("If " + numOfFans + " fans attend, they will all recieve " + albumTitle + ".");
		
		} else {
			console.log ("If only " + numOfFans + " fans attend, unfortunately they won't receive an album.");
		}
		
} else {
	
	if (albumTitle = "\"Femme Fatale\" Special Edition") {
	console.log("Since " + numOfFans + " fans did not attend, no special editions will be distributed prior to the event.");
	} 
	
	else {
	console.log("If " + numOfFans + " fans do not bring " + albumTitle + " to the show prior to the doors opening, they will not receive a special edition.");
	}
}