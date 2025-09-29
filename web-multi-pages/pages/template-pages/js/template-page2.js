// JS spécifique à page2

document.addEventListener('DOMContentLoaded', function() {
	// Intro fieldset
	const introFieldset = document.querySelector('.intro-fieldset');
	if (introFieldset && typeof TEXTS !== 'undefined' && TEXTS.template_page2 && TEXTS.template_page2.fieldsetText) {
		const p = document.createElement('p');
		p.textContent = TEXTS.template_page2.fieldsetText;
		introFieldset.appendChild(p);
	}

		// Main fieldset (contenu à définir)
	const mainFieldset = document.querySelector('.main-fieldset');
	if (mainFieldset) {
		mainFieldset.innerHTML = '';
	}
});
