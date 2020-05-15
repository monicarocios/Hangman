const game = () => {
	let pScore = 10;
	let guessed = [];
	let wordStatus = null;
	let alphabet = [];
	let randomWord = '';

	let spaceWords = [
		'antimatter',
		'black hole',
		'asteroid',
		'red giant',
		'earth',
		'gamma ray',
		'gravity',
		'meteorite',
		'neptune',
		'pulsar',
		'quasar',
		'solar rain',
		'supernova'
	];

	// Computer randomly selects a word from the space words array
	let generateRandomWord = () => (randomWord = spaceWords[Math.floor(Math.random() * spaceWords.length + 1)]);

	// Start the Game
	const startGame = () => {
		const playbtn = document.getElementById('intro-btn');
		const introScreen = document.querySelector('.jumbotron');
		const gameScreen = document.querySelector('.game');

		playbtn.addEventListener('click', () => {
			introScreen.classList.add('fadeOut');
			gameScreen.classList.add('fadeIn');
		});

		console.log(randomWord);
		document.getElementById('guesses-left').innerHTML = 'Guesses left: ' + pScore;
		// console.log(Math.floor(Math.random() * spaceWords.length + 1));
		drawCanvas();
	};

	const printButtons = () => {
		alphabet = [
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
			'g',
			'h',
			'i',
			'j',
			'k',
			'l',
			'm',
			'n',
			'o',
			'p',
			'q',
			'r',
			's',
			't',
			'u',
			'v',
			'w',
			'x',
			'y',
			'z'
		];

		for (i = 0; i < alphabet.length; i++) {
			// let name = document.createTextNode(alphabet[i]);
			let btn = document.createElement('button');
			btn.type = 'button';
			btn.className = 'btn btn-light';
			let name = document.createTextNode(alphabet[i]);
			btn.appendChild(name);
			btn.id = btn.innerHTML;
			document.getElementById('alphabet').appendChild(btn);
			checkGuess(btn, randomWord);
		}
	};

	const checkGuess = (letterClicked, randomWord) => {
		letterClicked.addEventListener('click', () => {
			console.log(letterClicked.id);
			guessed.indexOf(letterClicked.id) === -1 ? guessed.push(letterClicked.id) : null;
			// Returns - 1 if the item is not found, so if letter clicked not found in guessed array already, push it to the array
			document.getElementById(letterClicked.id).setAttribute('disabled', true);
			// console.log(guessed);

			if (randomWord.indexOf(letterClicked.id) >= 0) {
				guessedCorrectly(randomWord);
				document.getElementById('results').innerHTML = 'You Guessed Correctly!';
				youWin(wordStatus, randomWord);
			} else {
				pScore--;
				document.getElementById('guesses-left').innerHTML = 'Guesses left: ' + pScore;
				document.getElementById('results').innerHTML = 'Wrong Letter :(';
				youLose();
				animate(pScore);
			}
		});
	};

	const youWin = (wordStatus, randomWord) => {
		if (wordStatus === randomWord) {
			alert('YOU WON!! The word was: ' + randomWord);
			reset();
		}
	};

	const youLose = () => {
		if (pScore === 0) {
			alert('You Lost lil bit... The word was: ' + randomWord);
			reset();
		}
	};

	const reset = () => {
		pScore = 11;
		guessed = [];
		wordStatus = null;
		document.getElementById('alphabet').innerHTML = '';
		randomWord = '';

		document.getElementById('results').innerHTML = 'Guess a letter to start';

		generateRandomWord();
		printButtons();
		guessedCorrectly(randomWord);
		startGame();
	};

	// Create blanks on the screen for word to be guessed
	// how it works:
	// using random word generated by computer, function splits it by each letter and then runs through each of them
	// it then goes to the guessed array
	// if letter of random word exists in guessed array, then place the letter there- to fill spaces where same letter appears more than once also
	// if not, then it leaves a blank

	function guessedCorrectly(randomWord) {
		wordStatus = randomWord.split('').map((letter) => (guessed.indexOf(letter) >= 0 ? letter : ' _ ')).join('');

		document.getElementById('blanks').innerHTML = wordStatus;
	}

	// Animate Man
	const animate = (pScore) => {
		drawArray[pScore]();
	};

	// Hangman
	const drawCanvas = () => {
		var canvas = document.getElementById('myCanvas');
		var ctx = canvas.getContext('2d');
		ctx.beginPath();
		ctx.fillStyle = 'rgba(255, 255, 255, 0.87)';
		ctx.fillRect(0, 0, 400, 500);
		ctx.linewidth = 2;
	};

	const base = () => {
		var canvas = document.getElementById('myCanvas');
		var ctx = canvas.getContext('2d');
		// ctx.fillStyle = 'rgba(255, 255, 255, 0.87)';
		// ctx.fillRect(0, 0, 400, 500);
		ctx.beginPath();
		ctx.moveTo(50, 50);
		ctx.lineTo(50, 450);
		ctx.stroke();
	};

	head = function() {
		var canvas = document.getElementById('myCanvas');
		var ctx = canvas.getContext('2d');
		ctx.beginPath();
		ctx.arc(60, 25, 10, 0, Math.PI * 2, true);
		ctx.stroke();
	};

	draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
		var canvas = document.getElementById('myCanvas');
		var ctx = canvas.getContext('2d');
		ctx.moveTo($pathFromx, $pathFromy);
		ctx.lineTo($pathTox, $pathToy);
		ctx.stroke();
	};

	frame1 = function() {
		draw(0, 150, 150, 150);
	};

	frame2 = function() {
		draw(10, 0, 10, 600);
	};

	frame3 = function() {
		draw(0, 5, 70, 5);
	};

	frame4 = function() {
		draw(60, 5, 60, 15);
	};

	torso = function() {
		draw(60, 36, 60, 70);
	};

	rightArm = function() {
		draw(60, 46, 100, 50);
	};

	leftArm = function() {
		draw(60, 46, 20, 50);
	};

	rightLeg = function() {
		draw(60, 70, 100, 100);
	};

	leftLeg = function() {
		draw(60, 70, 20, 100);
	};

	drawArray = [ rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1 ];

	// const drawHead = (drawingObject) => {
	// 	drawingObject.beginPath();
	// 	drawingObject.arc(60, 25, 10, 0, Math.PI * 2, true);
	// 	drawingObject.stroke();

	// if (pScore === 14) {
	// 	drawBase(ctx);
	// } else if (pScore === 13) {
	// 	drawHead(ctx);
	// }
	// };

	// need to figure out if splitting different parts of hangman
	// body into functions works, or just using if else statements
	// for pscore and hangman bosy works better

	generateRandomWord();
	printButtons();
	guessedCorrectly(randomWord);
	startGame();

	// draw different parts of hangman when guess incorrectly
	// functions divided by parts
};

game();
