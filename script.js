// -- Constants -- //
let userName = prompt("What is your name?");
let greeting = document.getElementById("greeting");
let responseImg = document.getElementById("response-img");
let responseText = document.getElementById("response-overlay");
let questionText = document.getElementById("question-text");

// -- Functions -- //
greeting.innerHTML = userName ? `Hello, ${userName}!` : "Hello!";

function shakeMagic8Ball() {
	// -- Get the user's question -- //
	let userQuestion = prompt("What is your question?");

	// -- Generate a random number between 0 and 7 -- //
	let randomNumber = Math.floor(Math.random() * 8);

	// -- Initialize the response -- //
	let eightBall = "";

	// -- Switch statement to determine the response -- //
	switch (randomNumber) {
		case 0:
			eightBall = "It is certain";
			break;
		case 1:
			eightBall = "It is decidedly so";
			break;
		case 2:
			eightBall = "Reply hazy, try again";
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

	// -- Log the response (for debugging) -- //
	console.log(`The Magic Eight Ball says: ${eightBall}`);

	// -- Display the question -- //
	questionText.innerHTML = `${
		userName ? userName + " asks: " : ""
	}"${userQuestion}"`;

	// -- Display the response -- //
	responseText.innerHTML = `${eightBall}`;
	responseText.classList.add("show");

	// -- Shake the Magic 8 Ball -- //
	responseImg.classList.add("shake");
	setTimeout(() => {
		responseImg.classList.remove("shake");
	}, 700);

	// -- Hide the response -- //
	setTimeout(() => {
		responseText.classList.remove("show");
	}, 5000);
}
