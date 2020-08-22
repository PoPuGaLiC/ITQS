let position = 0;

switching(position);


for (img of document.getElementsByClassName('humans')){
	img.onclick = activeHuman;
}

function activeHuman(event){
	let humans = document.getElementsByClassName('humans');
	for (i = 0; i < humans.length; i++){
		if (humans[i] == event.target) position = i;
    };
    switching(position);
};

function switching(n){
	hide();
	view(n);
}

function view(n){
	document.getElementById("governance").children[n].style.borderColor = "#EB4A1F";
	document.getElementsByClassName("gall")[n].style.display = "block";
};

function hide(){
	for (image of document.getElementsByClassName('humans'))
		image.style.borderColor = "#999999";
	for (cell of document.getElementsByClassName('gall'))
		cell.style.display = "none";
};

document.getElementsByClassName('gallery')[0].children[0].onclick = switchingLeft;
document.getElementsByClassName('gallery')[0].children[2].onclick = switchingRight;

function switchingLeft(){
	position = ((4+position-1))%4;
	switching(position);
};

function switchingRight(){
	position = ((4+position+1))%4;
	switching(position);
};


// (((4+position-1))%4)
// for (arrow of document.getElementsByClassName("las la-chevron-right")){
// 	arrow.onclick = rotate;
// }

// function rotate(event){
// 	console.log("rot")
// 	event.target.style.transform = 'rotate(' + 90 + 'deg)';
// };


