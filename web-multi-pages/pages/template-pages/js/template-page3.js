// JS spécifique à page3

document.addEventListener('DOMContentLoaded', function() {
	// Intro fieldset
	const introFieldset = document.querySelector('.intro-fieldset');
	if (introFieldset && typeof TEXTS !== 'undefined' && TEXTS.template_page3 && TEXTS.template_page3.fieldsetText) {
		const p = document.createElement('p');
		let i = 0;
        function typeWriter() {
            if (i < TEXTS.template_page3.fieldsetText.length) {
                p.textContent += TEXTS.template_page3.fieldsetText.charAt(i);
                i++;
                setTimeout(typeWriter, 60); // vitesse de frappe
            }
        }
        typeWriter();	
        introFieldset.appendChild(p);
	}
	// Main fieldset (contenu à définir)
	const mainFieldset = document.querySelector('.main-fieldset');
	if (mainFieldset) {
		mainFieldset.innerHTML = '';
	}
});
