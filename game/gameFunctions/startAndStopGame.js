// запуск игры
function startGame() {
	if(gameIsStarted == false) {
		score = 0;
		hero = createNewHero();
		interval_1 = setInterval(createEnemy,300);
		interval_2 = setInterval(moveDeleteAndRenderAllEnemyAndHero,50);
		document.getElementById('startGameBtn').hidden = true;
		document.getElementById('stopGameBtn').hidden = false;
		gameIsStarted = true;
	}
}

// остановка игры
function stopGame() {
	if(gameIsStarted == true) {
		clearInterval(interval_1);
		clearInterval(interval_2);
		document.getElementById('startGameBtn').hidden = false;
		document.getElementById('stopGameBtn').hidden = true;
		gameIsStarted = false;
		
		while(enemyArray.length > 0) {
			enemyArray.splice(0,1);
		}
		
		const enemyArrayLenFixed = enemyArray.length;
		console.log("Number of enemy: " + enemyArrayLenFixed);
		holst.clearAll();
	}
}
