// import { clearConfigCache } from "prettier";

// variable global
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navlink = document.querySelectorAll("#nav-menu li");
const navlinkA = document.querySelectorAll("#nav-menu li a");
const html = document.querySelector("html");
const toggleDark = document.getElementById("toggle-dark");
const toTop = document.getElementById("to-top");
const toAbout = document.getElementById("to-about");

// scroll behavior to about // get startted👇
toAbout.addEventListener("click", function (event) {
	event.preventDefault();
	const targetIdAbout = this.getAttribute("href");
	const targetElementAbout = document.querySelector(targetIdAbout);
	if (targetElementAbout) {
		targetElementAbout.scrollIntoView({
			behavior: "smooth",
		});
	}
});

// scroll behavior back to top
toTop.addEventListener("click", function (event) {
	event.preventDefault();
	const targetIdHome = this.getAttribute("href");
	const targetElementHome = document.querySelector(targetIdHome);
	if (targetElementHome) {
		targetElementHome.scrollIntoView({
			behavior: "smooth",
		});
	}
});

// s scroll behavior disetiap nav link
navlinkA.forEach((link) => {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const targetId = this.getAttribute("href");
		console.log(targetId);
		const targetElement = document.querySelector(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({
				behavior: "smooth",
			});
		}
	});
});

// dark mode
toggleDark.addEventListener("click", function () {
	const toggleCheck = document.querySelector("#dark-toggle");
	toggleCheck.checked ? html.classList.add("dark") : html.classList.remove("dark");
});

// hamburger menu
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

// close nav jika click mana saja kecuali hamburger & navLInk
document.addEventListener("click", function (e) {
	if (e.target != hamburger && e.target != navlink) {
		hamburger.classList.remove("hamburger-active");
		navMenu.classList.remove("nav-active");
		navlink.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = "";
			}
		});
	}
});

// navbar fixed
window.onscroll = function () {
	const header = document.querySelector("header");
	const fixedNav = header.offsetTop;
	const top = document.getElementById("to-top");

	if (window.scrollY > fixedNav) {
		header.classList.add("navbar-fixed");
		top.classList.remove("hidden");
	} else {
		header.classList.remove("navbar-fixed");
		top.classList.add("hidden");
	}
};
