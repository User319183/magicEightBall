// Get user name and display greeting
let userName = prompt("What is your name?");

let greeting = document.getElementById("greeting");
let responseImg = document.getElementById("response-img");
let responseText = document.getElementById("response-text");
let questionText = document.getElementById("question-text");
let imageChoice = "";
// if no name given then just default to "Hello!"
greeting.innerHTML = userName ? `Hello, ${userName}!` : "Hello!";

function shakeMagic8Ball() {
	let userQuestion = prompt("What is your question?");

	// DO NOT TOUCH THIS CODE
	let randomNumber = Math.floor(Math.random() * 8);

	let eightBall = "";

	switch (randomNumber) {
		case 0:
			eightBall = "It is certain";
			break;
		case 1:
			eightBall = "It is decidedly so";
			break;
		case 2:
			eightBall = "Reply hazy try again";
			break;
		case 3:
			eightBall = "Cannot predict now";
			break;
		case 4:
			eightBall = "Do not count on it";
			break;
		case 5:
			eightBall = "My sources say no";
			break;
		case 6:
			eightBall = "Outlook not so good";
			break;
		case 7:
			eightBall = "Signs point to yes";
			break;
	}

	console.log(`The Magic Eight Ball says: ${eightBall}`);

	questionText.innerHTML = `${
		userName ? userName + " asks: " : ""
	}${userQuestion}`;
	responseText.innerHTML = `The Magic Eight Ball says: ${eightBall}`;
}

// Add the image to the responseImg element
responseImg.src = imageChoice;



shakeMagic8Ball();
