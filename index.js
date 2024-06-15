const arrow1 = document.querySelector(".arrow:nth-child(1)"); //Левая стрелка
const arrow2 = document.querySelector(".arrow:nth-child(2)"); //Правая стрелка
const chain = document.getElementById("chain");

const dots = document.querySelectorAll("#dots > div"); //Точки слайдера

const h_contact = document.querySelector("#header > span:nth-child(3)"); //Связаться со мной

let allPanelsText = []; //Для 4 панелей, по 1 списку на панель
allPanelsText.push(["Написание back-end для вашего сайта на PHP", "Установление на хостинг", "Выполнение лабораторных"]);
allPanelsText.push(["Фронтенд с JS", "Качественная вёрстка", "Адаптив"]);
allPanelsText.push(["Написание стилей", "Анимации", "Движение"]);
allPanelsText.push(["Структурированный код", "Вместе с PHP", "Вместе с JS"]);

const panels = document.querySelectorAll(".slider-item-panel");
for(let i = 0; i < panels.length; i++){
	let str = "";
	allPanelsText[i].forEach((e)=>{
		str += `<div><img src="img/like.png"><span>${e}</span></div>`;
	});
	panels[i].innerHTML = str;
}

let x = 0;
let item = 0;
updateDots(0);

arrow1.addEventListener('click', ()=>{
	left();
	updateDots(item);
});
arrow2.addEventListener('click', ()=>{
	right();
	updateDots(item);
});

for(let i = 0; i < dots.length; i++){
	dots[i].addEventListener('click', ()=>{
		move(i);
	});
}


function move(num){
	x = num*25;
	chain.style.transform = `translateX(-${x}%)`;
	updateDots(num);
}
function left(){
	x = x == 0 ? 75 : x - 25;
	item = x/25;
	chain.style.transform = `translateX(-${x}%)`;
}
function right(){
	x = x == 75 ? 0 : x + 25;
	item = x/25;
	chain.style.transform = `translateX(-${x}%)`;
}
function updateDots(num){
	dots.forEach((e)=>{
		e.style.backgroundColor = 'transparent';
	});
	dots[num].style.backgroundColor = 'white';
}


h_contact.addEventListener('click',()=>{
	window.open('https://t.me/fluxdeken');
});