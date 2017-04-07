// показать на холсте всех врагов
function renderEnemies() {
	holst.clearAll();
	const enemyArrayLenFixed = enemyArray.length;
	
	for(let i = 0; i < enemyArrayLenFixed; i++) {
		enemyArray[i].render(holst);
	}
}

// показать на холсте главного героя
function renderHero() {
	hero.render(holst);
}