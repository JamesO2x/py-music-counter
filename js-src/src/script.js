// Note Vars
let notes = 8; // Number of notes available in our scale
let melody = 12; // Number of Notes in a melody
// let total = notes**melody // Total melodies using exponent
let total = 68719476736; // precalculated number using the 8^12 above.

var intID = 0;
// var intID = 68719476700;
var octID = "000000000000";
var noteID = "CCCCCCCCCCCC";
var binID = "";

var test = 0;

// Toggle Button Vars
let toggle = false;
let intervalId;

// Note Table
let noteTable = [
	["ID", "ABC", "MusicalBeep"],
	[0, "C", "C4"],
	[1, "D", "D4"],
	[2, "E", "E4"],
	[3, "F", "F4"],
	[4, "G", "G4"],
	[5, "A", "A4"],
	[6, "B", "B4"],
	[7, "c", "C5"]
];

// // Render Note Table as HTML table
// let table = document.getElementById("note-table");

// for (let i = 0; i < noteTable.length; i++) {
// 	let row = table.insertRow();
// 	for (let j = 0; j < noteTable[i].length; j++) {
// 		let cell = row.insertCell();
// 		cell.innerHTML = noteTable[i][j];
// 	}
// }

function processBinary(inputString) {
    // Replace all occurrences of "1" with "<b>1</b>"
    inputString = inputString.replace(/1/g, "<b>1</b>");
    return inputString;
  }

function octalToNotes(inputString) {
	for (let i = 1; i < noteTable.length; i++) {
		let re = new RegExp(noteTable[i][0], "g");
		inputString = inputString.replace(re, noteTable[i][1]);
	}
	return inputString;
}

function submitMe(id) {
    var value = document.getElementById(id).value;
	intID = notesToInt(value);
	calculateNumbers();
    // alert(value);
	beep();
}

function notesToInt(inputString) {
	let newNum = 0;
	for (let i = 1; i < noteTable.length; i++) {
		let re = new RegExp(noteTable[i][1], "g");
		inputString = inputString.replace(re, noteTable[i][0]);
		newNum = parseInt(inputString,8);
	}
	return newNum;
}

function calculateNumbers() {
	if (intID >= total) {
		// Clear our timer
		clearInterval(intervalId);
		toggle = false;
		this.innerHTML = "START";
		this.setAttribute("class", "good"); // change button to GREEN
	} else {
		document.getElementById("counter").innerHTML = counter;
		
		// set JS vars
		octID = intID.toString(8).padStart(melody, "0"); // add "melody" number of zeros
		binID = intID.toString(2).padStart(melody*3, "0"); // add "melody" number of zeros
		noteID = octalToNotes(octID); // converts an Octal number to Musical ABC Notation
		
		// backwards conversions

		// add text to text elements
		document.getElementById("counter").innerHTML = intID.toLocaleString();
		document.getElementById("total").innerHTML = total.toLocaleString();
		document.getElementById("octal").innerHTML = octID;
		// document.getElementById("notes").innerHTML = noteID;
		// document.getElementById("binary").innerHTML = binID;
		
		// input value
		document.getElementById("noteInput").value = noteID;
		
		// binary styled html
		document.getElementById("binary").innerHTML = processBinary(binID);
		
		// create pixel canvas images
		createBarcode(binID);
		createPixmap(binID);
		createStaff(octID);
	}
}

// console.log(replaceWithNotes("The notes are 0 1 2 3 4 5 6 7"));
// Output: "The notes are C D E F G A B c"

// Random Button
document.getElementById("random-button").addEventListener("click", function () {
	beep();
	intID = Math.floor(Math.random() * total); // random ID number
	calculateNumbers();
});

// Counter Button
document.getElementById("toggle-button").addEventListener("click", function () {
	beep();
	toggle = !toggle;

	if (toggle) {
		intervalId = setInterval(() => {
			intID++;
			calculateNumbers();
		}, 1); // set to 1000 for once per second
		// Change button to STOP
		this.innerHTML = "STOP";
		this.setAttribute("class", "bad"); // change button to RED
	} else {
		// Clear our timer
		clearInterval(intervalId);
		this.innerHTML = "START";
		this.setAttribute("class", "good"); // change button to GREEN
	}
});


// Function that turns a binary number into a barcode
function createBarcode(binaryNumber) {
	let canvas = document.getElementById("barcode");
	let ctx = canvas.getContext("2d");

	// Clear canvas before drawing new barcode
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Set canvas dimensions
	canvas.width = binaryNumber.length;
	canvas.height = 50;

	// Draw barcode
	for (let i = 0; i < binaryNumber.length; i++) {
		// define pixel number regions
		if (i % 2 == 0) {
			// check for even iterations
			ctx.fillStyle = "red";
			ctx.fillRect(i * 6, 0, 6, 5); // xpos, ypos, width, height
		} else {
			ctx.fillStyle = "cyan";
			ctx.fillRect(i * 6, 0, 6, 5);
		}

		// make numbers
		if (binaryNumber[i] == 1) {
			ctx.fillStyle = "black";
			ctx.fillRect(i * 1, 10, 1, 50);
		} else {
			ctx.fillStyle = "white";
			ctx.fillRect(i * 1, 10, 1, 50);
		}
	}
}

// Function that turns a binary number into a pixel map
function createPixmap(binaryNumber) {
	let canvas = document.getElementById("pixmap");
	let ctx = canvas.getContext("2d");

	// Clear canvas before drawing new barcode
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Set canvas dimensions
	canvas.width = 6;
	canvas.height = 6;

	// Draw barcode
	for (let i = 0; i < binaryNumber.length; i++) {
		// make pixel dots
		if (binaryNumber[i] == 1) {
			ctx.fillStyle = "black";
			ctx.fillRect(i % 6, Math.floor(i / 6), 1, 1); // xpos, ypos, width, height
		} else {
			ctx.fillStyle = "white";
			ctx.fillRect(i % 6, Math.floor(i / 6), 1, 1); // xpos, ypos, width, height
		}
	}
}

// Function that turns an binary number into a pixel musical staff
function createStaff(octalNumber) {
	let canvas = document.getElementById("staff");
	let ctx = canvas.getContext("2d");

	// Clear canvas before drawing new barcode
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Set canvas dimensions
	canvas.width = octalNumber.length * 4;
	canvas.height = 11;
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	// alternate line color, for human readability 	
	for (let j = 0; j < canvas.height; j++) {
		if (j % 2 == 0) {
			ctx.fillStyle = "#eee";
			ctx.fillRect(0, j, canvas.width, 1);
		};
	};

	// Draw pixel staff notes
	for (let i = 0; i < octalNumber.length; i++) {
		// define pixel number regions
		if (i % 2 == 0) {
			// check for even iterations
			ctx.fillStyle = "red";
			ctx.fillRect(i * 16, 0, 16, 1); // xpos, ypos, width, height
		} else {
			ctx.fillStyle = "cyan";
			ctx.fillRect(i * 16, 0, 16, 1);
		}

		// make numbers
		ctx.fillStyle = "blue";
		ctx.fillRect(i * 4, 9 - octalNumber[i], 2, 1);  // xpos, ypos, width, height
	};
};


// ###################################################################################
// Beep WAV using DATA/URI structure. Pretty cool!
function beep() {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
    snd.play();
}


window.onload = function() {
	calculateNumbers();
  beep();
};