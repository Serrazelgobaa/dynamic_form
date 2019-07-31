const champNom = document.getElementById('nom');
const champPrenom = document.getElementById('prenom');
const champDate = document.getElementById('date_naissance');
const champMdp = document.getElementById('mdp');
const champMdpConf = document.getElementById('mdp_conf');
const champMdpDisplay = document.getElementById('mdp_display');
const bouton = document.getElementById('submit');



const toggleMdp = () => {
	if (champMdpDisplay.checked) {
		champMdp.setAttribute('type','text');
		champMdpConf.setAttribute('type','text');
	}


	else {
		champMdp.setAttribute('type','password');
		champMdpConf.setAttribute('type','password');
	}
};

const checkLength = () => {
	let mdp = champMdp.value;

	if (mdp.length === 0){
		champMdp.style.border = '1px solid rgba(0,0,0,0.3)';
		champMdp.style.backgroundColor = 'white';
	}

	else if(mdp.length < 8) {
		champMdp.style.border = '2px solid red';
		champMdp.style.backgroundColor = '#dc8686';
	}

	else {
		champMdp.style.border = '2px solid green';
		champMdp.style.backgroundColor = '#85ce77';
	}
};

const checkForm = () => {
	if (!(champNom.value)) {
		alert("Veuillez entrer votre nom");
	}

	else if (!(champPrenom.value)) {
		alert("Veuillez entrer votre prénom");
	}

	else if (!(champDate.value)) {
		alert("Veuillez entrer votre date de naissance");
	}

	else if (!(champMdp.value)) {
		alert("Veuillez entrer un mot de passe");
	}

	else if (!(champMdpConf.value)) {
		alert("Veuillez confirmer votre mot de passe");
	}

	else if (champMdp.value.length < 8) {
		alert("Veuillez saisir un mot de passe de plus de 8 caractères");
	}

	else if (champMdp.value !== champMdpConf.value) {
		alert("La confirmation du mot de passe n'est pas identique au mot de passe")
	}

	else {
		alert("Merci pour votre inscription :)");
	}

};


champMdpDisplay.addEventListener('change', toggleMdp);
champMdp.addEventListener('keyup',checkLength);
bouton.addEventListener('click', checkForm);