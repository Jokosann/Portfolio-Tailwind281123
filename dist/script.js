// hamberger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navlink = document.querySelectorAll("#nav-menu li");
hamburger.addEventListener("click", function () {
	hamburger.classList.toggle("hamburger-active");
	navMenu.classList.toggle("nav-active");
	// animation nav-link in
	navlink.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navFade 300ms ease forwards ${(index + 1) * 70}ms`;
		}
	});
});

// !eror
// window.addEventListener("click", function (e) {
// 	if (e.target != hamburger && e.target != navMenu) {
// 		hamburger.classList.remove("hamburger-active");
// 		navMenu.classList.remove("nav-active");
// 	}
// });

// navbar fixed
window.onscroll = function () {
	const header = document.querySelector("header");
	const fixedNav = header.offsetTop;
	const top = document.getElementById("to-top");

	if (window.pageYOffset > fixedNav) {
		header.classList.add("navbar-fixed");
		top.classList.remove("hidden");
	} else {
		header.classList.remove("navbar-fixed");
		top.classList.add("hidden");
	}
};
