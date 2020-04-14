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

	startGame();
};

game();
