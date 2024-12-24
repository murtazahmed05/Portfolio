const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

menuToggle.addEventListener("click", () => {
	mobileMenu.classList.toggle("hidden");
	hamburgerIcon.classList.toggle("hidden");
	closeIcon.classList.toggle("hidden");
});

// GSAP (Marquee) Animation

document.addEventListener("DOMContentLoaded", () => {
	const wrapper = document.querySelector(".wrapper");

	// Duplicate content for seamless animation
	wrapper.innerHTML += wrapper.innerHTML;

	// GSAP Animation
	gsap.to(".wrapper", {
		x: () => `-${wrapper.scrollWidth / 2}px`, // Scroll left by half the total width
		duration: 15, // Adjust speed as needed
		ease: "linear", // Linear motion for consistent speed
		repeat: -1, // Infinite loop
		onRepeat: () => {
			// Reset position to ensure seamless loop
			gsap.set(wrapper, { x: 0 });
		},
	});
});
