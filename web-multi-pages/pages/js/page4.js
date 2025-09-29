
// JS spécifique à page4
document.addEventListener('DOMContentLoaded', function() {
	// Intro fieldset
	const introFieldset = document.querySelector('.intro-fieldset');
	if (introFieldset && typeof TEXTS !== 'undefined' && TEXTS.page4 && TEXTS.page4.fieldsetText) {
		const p = document.createElement('p');
		p.textContent = TEXTS.page4.fieldsetText;
		introFieldset.appendChild(p);
	}

	// Main fieldset : gestion du bouton et champ fichier
	if (typeof TEXTS !== 'undefined' && TEXTS.page4) {
		document.getElementById('fileBtnText').textContent = TEXTS.page4.fileButton;
		document.getElementById('selectedFileName').placeholder = TEXTS.page4.filePlaceholder;
		var step1Label = document.getElementById('step1Label');
		if (step1Label && TEXTS.page4.step1Label) {
			step1Label.textContent = TEXTS.page4.step1Label;
		}
		var step2Label = document.getElementById('step2Label');
		var newFileName = document.getElementById('newFileName');
		if (step2Label && TEXTS.page4.step2Label) {
			step2Label.textContent = TEXTS.page4.step2Label;
		}
		if (newFileName && TEXTS.page4.step2Placeholder) {
			newFileName.placeholder = TEXTS.page4.step2Placeholder;
		}
		var step3Label = document.getElementById('step3Label');
		var sendBtn = document.getElementById('sendBtn');
		if (step3Label && TEXTS.page4.step3Label) {
			step3Label.textContent = TEXTS.page4.step3Label;
		}
		if (sendBtn && TEXTS.page4.sendButton) {
			sendBtn.textContent = TEXTS.page4.sendButton;
		}
		if (sendBtn) {
			sendBtn.addEventListener('click', async function() {
				const fileName = document.getElementById('selectedFileName').value;
				const newName = document.getElementById('newFileName').value;
				if (!fileName || !newName) {
					alert('Veuillez sélectionner un fichier et saisir un nouveau nom.');
					return;
				}
				// Envoi à l'API (POST)
				try {
					const apiUrl = (typeof TEXTS !== 'undefined' && TEXTS.page4 && TEXTS.page4.sendApiUrl) ? TEXTS.page4.sendApiUrl : '/api/send';
					const response = await fetch(apiUrl, {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ fileName, newName })
					});
					if (response.ok) {
						alert('Fichier envoyé avec succès !');
					} else {
						alert('Erreur lors de l\'envoi.');
					}
				} catch (err) {
					alert('Erreur lors de l\'envoi.');
				}
			});
		}
	}
	const openFileBtn = document.getElementById('openFileBtn');
	const selectedFileName = document.getElementById('selectedFileName');
	const fileModal = document.getElementById('fileModal');
	const fileList = document.getElementById('fileList');
	const closeModalBtn = document.getElementById('closeModalBtn');

	if (openFileBtn && selectedFileName && fileModal && fileList && closeModalBtn) {
		openFileBtn.addEventListener('click', async function(e) {
			e.preventDefault();
			// Appel API pour récupérer la liste des fichiers
			let files = [];
			try {
				// Utilise l'URL de l'API depuis texts.js
				const apiUrl = (typeof TEXTS !== 'undefined' && TEXTS.page4 && TEXTS.page4.fileApiUrl) ? TEXTS.page4.fileApiUrl : '/api/files';
				const response = await fetch(apiUrl);
				if (response.ok) {
					files = await response.json();
				} else {
					files = [];
				}
			} catch (err) {
				files = [];
			}
			// Affichage de la liste dans la modale
			fileList.innerHTML = '';
			if (files.length === 0) {
				const li = document.createElement('li');
				li.textContent = 'Aucun fichier disponible.';
				fileList.appendChild(li);
			} else {
				files.forEach(function(file) {
					const li = document.createElement('li');
					li.textContent = file.name || file;
					li.style.cursor = 'pointer';
					li.style.padding = '0.5em 0';
					li.addEventListener('click', function() {
						selectedFileName.value = file.name || file;
						fileModal.style.display = 'none';
					});
					fileList.appendChild(li);
				});
			}
			fileModal.style.display = 'flex';
		});
		closeModalBtn.addEventListener('click', function() {
			fileModal.style.display = 'none';
		});
		// Fermer la modale si clic en dehors du contenu
		fileModal.addEventListener('click', function(e) {
			if (e.target === fileModal) fileModal.style.display = 'none';
		});
	}
});
