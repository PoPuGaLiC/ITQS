let position = 0;

switchingPeople(position);


for (img of document.getElementsByClassName('humans')){
	img.onclick = activeHuman;
}

function activeHuman(event){
	let humans = document.getElementsByClassName('humans');
	for (let i = 0; i < humans.length; i++){
		if (humans[i] == event.target) position = i;
    };
    switchingPeople(position);
};

function switchingPeople(n){
	hidePeople();
	viewPeople(n);
}

function viewPeople(n){
	document.getElementById("governance").children[n].style.borderColor = "#EB4A1F";
	document.getElementsByClassName("gall")[n].style.display = "block";
};

function hidePeople(){
	for (image of document.getElementsByClassName('humans'))
		image.style.borderColor = "#999999";
	for (cell of document.getElementsByClassName('gall'))
		cell.style.display = "none";
};

document.getElementsByClassName('gallery')[0].children[0].onclick = switchingLeft;
document.getElementsByClassName('gallery')[0].children[2].onclick = switchingRight;

function switchingLeft(){
	position = ((4+position-1))%4;
	switchingPeople(position);
};

function switchingRight(){
	position = ((4+position+1))%4;
	switchingPeople(position);
};

let arr = document.getElementsByClassName("list")[0];

for (let i = 0; i < 4; i++){
	arr.children[i*2].children[0].onclick = rotate;
}

function rotate(event){
	let question = 1;
	for (let i = 0; i < 4; i++){
			if (arr.children[i*2].children[0] == event.target) question = i*2+1;
    	};
	if(event.target.style.transform == 'rotate(90deg)'){
		event.target.style.transform = 'rotate(0deg)';
		hideQuestion(question);
	} else {
		event.target.style.transform ='rotate(90deg)';
		showQuestion(question);
	}
};

function hideQuestion(question){
	document.getElementsByClassName("list")[0].children[question].style.display = "none";
};

function showQuestion(question){
	document.getElementsByClassName("list")[0].children[question].style.display = "block";
};
