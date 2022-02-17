var menu = document.getElementsByClassName("nav__hamburger")[0];
var nav = document.getElementsByClassName("nav__link")[0];

menu.addEventListener("click", () => {
	// console.log("clicked");
	nav.classList.toggle("nav--active");
});
