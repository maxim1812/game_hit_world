// удаление всех врагов, которые зашли за запретную зону
function deleteDeadEnemies() {
	for(let i = 0; i < enemyArray.length; i++) {
		const isDead = enemyArray[i].isDead();
		if(isDead == true) {
			enemyArray.splice(i,1);
			i = 0;
		}
	}

	console.log("Number of enemy: " + enemyArray.length);
}

// нахождение новых позиций всех врагов
function findNewPositionsOfEnemies() {
	const enemyArrayLenFixed = enemyArray.length;
	
	for(let i = 0; i < enemyArrayLenFixed; i++) {
		enemyArray[i].moveXY();
	}
}

// осуществление движения героя посредством мышки
document.getElementById('canvas').onmousemove = getMousePosition;
function getMousePosition(e) {
	if(gameIsStarted == true) {
		let xx = e.pageX - document.getElementById('canvas').offsetLeft - 20;
		let yy = e.pageY - document.getElementById('canvas').offsetTop - 90;
		hero.setXY(xx,yy);
	}
}

// функция, вызывающаяся через определённый интервал
// вызывает внутри себя функции: удаления врагов, поиска новых позиций врагов, 
// вывода врагов на экран, вывода героя на экран, проверки героя на столкновение с врагами
function moveDeleteAndRenderAllEnemyAndHero() {
	deleteDeadEnemies();
	findNewPositionsOfEnemies();
	renderEnemies();
	renderHero();
	
	document.getElementById('pointsField').innerHTML = "Score: " + score;
	score++;
	
	if(positionHitClass.isArrayHitHero(enemyArray,hero) == true) {
		stopGame();
	}
}
