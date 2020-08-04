$(document).ready(async () => {
	animateCards();
});

// funcion para poder animar las tarjetas cuando cargan
async function animateCards() {
	const $cards = $('.article-card'); // referencia a los elementos
	$cards.hide(); // ocultamos los elementos para poder aplicar fadeIn()

	// promesa para poder esperar luego de cada ejecucion del ciclo
	const delay = (ms) => new Promise((res) => setTimeout(res, ms));

	// ciclo donde se aplica fadeIn() a cada elemento
	for (let i = 0; i < $cards.length; i++) {
		console.log(i);
		$($cards[i]).fadeIn(300);
		await delay(200);
	}
}
