
// JS spécifique à page1

document.addEventListener('DOMContentLoaded', function() {
	// Intro fieldset
	const introFieldset = document.querySelector('.intro-fieldset');
	if (introFieldset && typeof TEXTS !== 'undefined' && TEXTS.page1 && TEXTS.page1.fieldsetText) {
		const p = document.createElement('p');
        let i = 0;
        function typeWriter() {
            if (i < TEXTS.page1.fieldsetText.length) {
                p.textContent += TEXTS.page1.fieldsetText.charAt(i);
                i++;
                setTimeout(typeWriter, 60); // vitesse de frappe
            }
        }
        typeWriter();	
        introFieldset.appendChild(p);
	}
});

	// Liens de navigation dynamiques
	const navLinks = document.getElementById('nav-links');
	let links = [];
	if (typeof TEXTS !== 'undefined' && TEXTS.page1 && Array.isArray(TEXTS.page1.nav)) {
		links = TEXTS.page1.nav;
	}
	if (navLinks && links.length) {
		navLinks.innerHTML = '';
		links.forEach((item, idx) => {
			const a = document.createElement('a');
			a.href = item.href;
			a.className = 'question-link';
			a.style.display = 'flex';
			a.style.justifyContent = 'space-between';
			a.style.alignItems = 'center';
			if (item.icon) {
				const icon = document.createElement('i');
				icon.className = item.icon;
				icon.style.marginRight = '12px';
				a.appendChild(icon);
			}
			const span = document.createElement('span');
			span.textContent = item.label;
			span.style.flex = '1';
			span.style.textAlign = 'left';
			a.appendChild(span);
			const counter = document.createElement('span');
			counter.className = 'question-counter';
			counter.textContent = idx + 1;
			counter.style.marginLeft = '1em';
			counter.style.fontWeight = 'bold';
			a.appendChild(counter);
			navLinks.appendChild(a);
		});
	}
