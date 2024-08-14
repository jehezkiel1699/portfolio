// Toggle class active

const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
	navbarNav.classList.toggle('active');
};

// click outside the menu icon
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', (e) => {
	if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	}
});
