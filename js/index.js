$(document).ready(() => {
	animateCards();
	pagination();
});

function pagination() {
	$('#page-selection')
		.bootpag({
			total: 5,
			prev: '←',
			next: '→',
		})
		.on('page', function (event, num) {
			// cargar contetenido de acuerdo a el número de pagina
			animateCards();
			$(this).bootpag({ total: 10, maxVisible: 5 });
		});
}

async function animateCards() {
	const $cards = $('.article-card'); // referencia a los elementos
	$cards.fadeTo(0, 0); // se estable la opacidad a 0

	// promesa para poder esperar luego de cada ejecucion del ciclo
	const delay = (ms) => new Promise((res) => setTimeout(res, ms));

	// ciclo donde se ejecuta fade a cada elemento para que se muestre
	for (let i = 0; i < $cards.length; i++) {
		console.log(i);
		$($cards[i]).fadeTo(300, 1);
		await delay(200);
	}
}
