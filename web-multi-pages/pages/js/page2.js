// JS spécifique à page2

document.addEventListener('DOMContentLoaded', function() {
	// Intro fieldset
	const introFieldset = document.querySelector('.intro-fieldset');
	if (introFieldset && typeof TEXTS !== 'undefined' && TEXTS.page2 && TEXTS.page2.fieldsetText) {
		const p = document.createElement('p');
		p.textContent = TEXTS.page2.fieldsetText;
		introFieldset.appendChild(p);
	}

	// Injection des tuiles dans la main-fieldset (tiles-grid)
	if (typeof TEXTS !== 'undefined' && TEXTS.page2 && TEXTS.page2.nav) {
		const grid = document.getElementById('tiles-grid');
		if (grid) {
			grid.innerHTML = '';
			TEXTS.page2.nav.forEach(item => {
				const a = document.createElement('a');
				a.href = item.href || '#';
				a.className = 'tile-link';
				if (item.icon) {
					const icon = document.createElement('i');
					icon.className = item.icon;
					icon.style.marginRight = '12px';
					a.appendChild(icon);
				}
				const span = document.createElement('span');
				span.textContent = item.label;
				a.appendChild(span);
				grid.appendChild(a);
			});
		}
	}
});
