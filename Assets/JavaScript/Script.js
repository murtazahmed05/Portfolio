const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

menuToggle.addEventListener("click", () => {
	mobileMenu.classList.toggle("hidden");
	hamburgerIcon.classList.toggle("hidden");
	closeIcon.classList.toggle("hidden");
});
