//menu burger
let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".header__content");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});
}

$(window).resize(function (event) {
	mainblock();
});
function mainblock() {
	var h = $(window).outerHeight();
	$('.mainblock').css('min-height', h);
}
mainblock();

//placeholder
const forma = document.forms.formb;
const formInput = forma.emailform;
const placeholder = document.querySelectorAll('[placeholder]');
const formPlaceholder = formInput.placeholder;

placeholder.forEach(el =>
	el.addEventListener("focus", function (element) {
		el.placeholder = "";
	})
);
