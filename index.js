const arrow1 = document.querySelector(".arrow:nth-child(1)");
const arrow2 = document.querySelector(".arrow:nth-child(2)");
const chain = document.getElementById("chain");

const dots = document.querySelectorAll("#dots > div");

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