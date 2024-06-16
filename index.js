const arrow1 = document.querySelector(".arrow:nth-child(1)"); // Левая стрелка
const arrow2 = document.querySelector(".arrow:nth-child(2)"); // Правая стрелка
const chain = document.getElementById("chain");

const dots = document.querySelectorAll("#dots > div"); // Точки слайдера

const h_contact = document.querySelector("#header > span:nth-child(3)"); // Связаться со мной

// MESSAGE
const msg = document.getElementById("msg");
const msg_hm = document.getElementById("msg_hm");

setTimeout(()=>{
	msg.classList.add("opened");
}, 2000);

msg_hm.addEventListener('click', ()=>{
	msg.classList.remove("opened");
});

// HEADER
h_contact.addEventListener('click',()=>{
	window.open('https://t.me/fluxdeken');
});

// SLIDER
let allPanelsText = []; // Для 4 панелей, по 1 списку на панель
allPanelsText.push(["Написание back-end для<br>вашего сайта на PHP", "Установление на хостинг", "Выполнение лабораторных"]);
allPanelsText.push(["Фронтенд с JS", "Качественная вёрстка", "Адаптив"]);
allPanelsText.push(["Написание стилей", "Анимации", "Движение"]);
allPanelsText.push(["Структурированный код", "Вместе с PHP", "Вместе с JS"]);

/*if(window.innerWidth < 1025){
	allPanelsText[0][0]  = "Написание back-end для<br>вашего сайта на PHP";
}
else{
	allPanelsText[0][0]  = "Написание back-end для вашего сайта на PHP";
}*/

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

let clicked_recently = false;
setInterval(()=>{
	if(clicked_recently){
		clicked_recently = false;
	}else{
		right();
		updateDots(item);
	}
}, 4200);

arrow1.addEventListener('click', ()=>{ // Кнопка влево
	left();
	updateDots(item);
	clicked_recently = true;
});
arrow2.addEventListener('click', ()=>{ // Кнопка вправо
	right();
	updateDots(item);
	clicked_recently = true;
});
document.addEventListener("keydown", function(event) { //Нажатие клавиш
    if (event.key === "ArrowRight") {
		right();
		updateDots(item);
		clicked_recently = true;
    } else if (event.key === "ArrowLeft") {
		left();
		updateDots(item);
		clicked_recently = true;
    }
});
for(let i = 0; i < dots.length; i++){ // Кружочки снизу
	dots[i].addEventListener('click', ()=>{
		move(i);
		clicked_recently = true;
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

// FAQ Вопросы и ответы
const spans = document.querySelectorAll("#FAQ > span"); 
const answers = document.querySelectorAll("#FAQ > .answer");

let openedSpan = -1;
for(let i = 0; i < spans.length; i++){
	spans[i].addEventListener('click', ()=>{
		answers.forEach((e)=>{
			e.style.display = 'none';
		});
		if(openedSpan != i+1){
			spans[i+1].style.display = 'block';
			openedSpan = i+1;
		}else{
			openedSpan = -1;
		}			
	});
}