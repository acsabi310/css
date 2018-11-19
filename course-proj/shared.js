var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');
var modalClose = document.querySelector('.modal__action--negative')

for (var i = 0; i < selectPlanButtons.length; i++) {
	var btn = selectPlanButtons[i];
	btn.addEventListener('click', function () {
		backdrop.style.display = 'block';
		modal.style.display = 'block';
	})
}

modalClose.addEventListener('click', function () {
	backdrop.style.display = 'none';
	modal.style.display = 'none';
})

backdrop.addEventListener('click', function () {
	backdrop.style.display = 'none';
	modal.style.display = 'none';
})