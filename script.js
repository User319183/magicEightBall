// -- Constants -- //
let userName = prompt("What is your name?");
let greeting = document.getElementById("greeting");
let responseImg = document.getElementById("response-img");
let questionText = document.getElementById("question-text");

// -- Functions -- //
greeting.innerHTML = userName ? `Hello, ${userName}!` : "Hello!";

function shakeMagic8Ball() {
	// -- Get the user's question -- //
	let userQuestion = prompt("What is your question?");

	// -- Generate a random number between 0 and 7 -- //
	let randomNumber = Math.floor(Math.random() * 8);

	// -- Initialize the response -- //
	let imagePath = "";

	// -- Switch statement to determine the image path -- //
	switch (randomNumber) {
		case 0:
			imagePath = "images/ITISCERTAIN.gif";
			break;
		case 1:
			imagePath = "images/ITISDECIDEDLYSO.gif";
			break;
		case 2:
			imagePath = "images/REPLYHAZY.gif";
			break;
		case 3:
			imagePath = "images/ASKAGAINLATER.gif";
			break;
		case 4:
			imagePath = "images/DONTCOUNTONIT.gif";
			break;
		case 5:
			imagePath = "images/MYSOURCESSAYNO.gif";
			break;
		case 6:
			imagePath = "images/ASISEEITYES.gif";
			break;
		case 7:
			imagePath = "images/YES.gif";
			break;
	}

	// -- Log the response (for debugging) -- //
	console.log(`The Magic Eight Ball image path: ${imagePath}`);

	// -- Display the question -- //
	questionText.innerHTML = `${
		userName ? userName + " asks: " : ""
	}"${userQuestion}"`;

	// -- Change the image source -- //
	responseImg.src = imagePath;
	responseImg.classList.add("shake");
	setTimeout(() => {
		responseImg.classList.remove("shake");
	}, 700);
}

// -- Set default image for the Magic 8 Ball -- //
responseImg.src = "images/default.jpeg";
