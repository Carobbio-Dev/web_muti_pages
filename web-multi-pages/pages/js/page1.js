
// JS spécifique à page1

document.addEventListener('DOMContentLoaded', function() {
	// Intro fieldset
	const introFieldset = document.querySelector('.intro-fieldset');
	if (introFieldset && typeof TEXTS !== 'undefined' && TEXTS.page1 && TEXTS.page1.fieldsetText) {
		const p = document.createElement('p');
		p.textContent = TEXTS.page1.fieldsetText;
		introFieldset.appendChild(p);
	}
	// Main fieldset (contenu à définir)
	const mainFieldset = document.querySelector('.main-fieldset');
	if (mainFieldset) {
		mainFieldset.innerHTML = '';
	}
});
