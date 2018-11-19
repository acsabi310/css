var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');
var modalClose = document.querySelector('.modal__action--negative')
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

console.dir(mobileNav);

for (var i = 0; i < selectPlanButtons.length; i++) {
	var btn = selectPlanButtons[i];
	btn.addEventListener('click', function () {
		// backdrop.style.display = 'block';
		// modal.style.display = 'block';
		modal.classList.add('open');
		backdrop.classList.add('open');
	})
}

modalClose.addEventListener('click', function () {
	// backdrop.style.display = 'none';
	// modal.style.display = 'none';
	// modal.className = 'open';	// this just override
	modal.classList.remove('open');
	backdrop.classList.remove('open');
})

backdrop.addEventListener('click', function () {
	// backdrop.style.display = 'none';
	// modal.style.display = 'none';
	// mobileNav.style.display = 'none';
	modalClose.classList.remove('open');
	backdrop.classList.remove('open');
	mobileNav.classList.remove('open');
});

toggleButton.addEventListener('click', function () {
	// mobileNav.style.display = 'block';
	// backdrop.style.display = 'block';
	mobileNav.classList.add('open');
	backdrop.classList.add('open');
})