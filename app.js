const game = () => {
	let pScore = 0;

	// Start the Game
	const startGame = () => {
		const playbtn = document.getElementById('intro-btn');
		const introScreen = document.querySelector('.jumbotron');
		const gameScreen = document.querySelector('.game');

		playbtn.addEventListener('click', () => {
			introScreen.classList.add('fadeOut');
			gameScreen.classList.add('fadeIn');
		});
	};

	const printButtons = () => {
		let alphabet = [
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
		}

		const letterBtn = document.getElementsByClassName('btn btn-light');
		console.log(letterBtn);
		// letterBtn.addEventListener('click', () => {
		// 	console.log(letterBtn.name);
		// });
	};

	const chooseLetter = () => {
		// const letterBtn = document.getElementsByClassName('.btn');
		// letterBtn.addEventListener('click', () => {
		// 	console.log(letterBtn.name);
		// });
	};

	startGame();
	printButtons();
	chooseLetter();

	// draw different parts of hangman when guess incorrectly
	// functions divided by parts

	const drawHangman = () => {
		var canvas = document.getElementById('myCanvas');
		var ctx = canvas.getContext('2d');
	};
};

game();
