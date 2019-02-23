var sr = ScrollReveal({
	origin   : "bottom",
	distance : "64px",
	duration : 800,
	delay    : 0,
	scale    : 1
});

sr.reveal('.phone-list a');
sr.reveal('.phone-list a');

var filterPhones = function() {
	var hash = window.location.hash;
	hash = hash.substring(hash.indexOf('#')+1);
	var category = '';
	var phones = document.getElementsByClassName('phone-thumbnail');
	for (var i = 0; i < phones.length; i++) {
		category = phones[i].dataset.category;
		phones[i].classList.remove('hidden');
		if (category != hash && hash.length > 0) {
			phones[i].classList.add('hidden');
		}
	}
}

var manageNavigation = function() {
	var hash = window.location.hash;
	hash = hash.substring(hash.indexOf('#')+1);
	var navigation = document.getElementsByClassName('nav-link');
	console.log(navigation);
	console.log(hash);
	for (var i = 0; i < navigation.length; i++) {
		navigation[i].classList.remove('active');
		if (navigation[i].dataset.category == hash) {
			navigation[i].classList.add('active');
		}
	}
}

window.addEventListener('hashchange', function(){
	filterPhones();
	manageNavigation();
});
document.addEventListener("DOMContentLoaded", function(event) { 
	filterPhones();
	manageNavigation();
});