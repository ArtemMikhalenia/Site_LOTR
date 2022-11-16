//menu burger
let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".header__content");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("_active");
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
let forma = document.forms.formb;
let formInput = forma.emailform;
let placeholder = document.querySelectorAll('[placeholder]');
let formPlaceholder = formInput.placeholder;

placeholder.forEach(el =>
	el.addEventListener("focus", function (element) {
		el.placeholder = "";
	})
);
placeholder.forEach(el =>
	el.addEventListener("blur", function (element) {
		formInput.placeholder = placeholder.value = "hola@gmail.com";
	}));

//SCROLL ANIMATION
const animItems = document.querySelectorAll('._anim-items'); //находим все объекты, которые будут анимироваться
if (animItems.length > 0) {                                  //проверяем существуют ли такие классы с помощью if
	window.addEventListener('scroll', animOnScroll);          //добавляем событие Скролл на целое окно браузера
	function animOnScroll() {                                 //создаем функцию
		for (let index = 0; index < animItems.length; index++) { //создаем цикл for
			const animItem = animItems[index];                    //получаем в переменную animItem каждый элемен из массива
			const animItemHeight = animItem.offsetHeight;      //получаем высоту объекта
			const animItemOffset = offset(animItem).top;       //получаем позицию объекта относительно верха страницы
			const animStart = 4;                              //получаем коэффициент, который будет регулировать момент старта анимации
			let animItemPoint = window.innerHeight - animItemHeight / animStart; //настраиваем момент старта анимации, создаем переменную старта анимации. Высота окна браузера - высоту объект а/коэффициент, т.е. 1/4 часть высоты объекта
			if (animItemHeight > window.innerHeight) {                           //проверяем если высота объекта выше высоты окна браузера, то мы меняем формулу расчета
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) { //если мы прокрутили больше,чем позиция объекта минус точка старта, но при этом прокрутили меньше, чем позиция объекта плюс его высота, то в этом моменте мы добавляем класс active
				animItem.classList.add('active');
			} else {
				if (!animItem.classList.contains('_no-anim')) { //если у объекта нету класса _no-anim, то active убираться не будет и анимация будет повторяться при скролле
					animItem.classList.remove('active');    //если условие не выполняется, то мы убираем класс. Делаем для того, чтобы повторно анимировать объект
				}
			}
		}
	}
	//Функция позиции объекта относительно верха (кроссбраузерная), скачана из интернета
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => { //задаем задержку анимации (указано в миллисекундах
		animOnScroll(); //объявляем функцию, чтобы при запуске страницы она объявлялась сразу, например, чтобы начальный заголовок сразу появился при загрузке страницы, а не при скроле
	}, 100);
}
