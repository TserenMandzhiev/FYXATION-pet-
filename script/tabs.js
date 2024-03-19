const button = document.getElementsByClassName('tabs__btn'),
	tabContent = document.getElementsByClassName('tabs__content');
button[0].classList.add('active');
tabContent[0].style.display = 'block';

function city(e, city) {
	for (let i = 0; i < button.length; i++) {
		tabContent[i].style.display = 'none';
		button[i].classList.remove('active');
	}
	document.getElementById(city).style.display = 'block';
	e.currentTarget.classList.add('active');
}
