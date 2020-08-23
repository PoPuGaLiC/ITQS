let position = 0;

switchingPeople(position);


for (img of document.getElementsByClassName('humans')){
	img.onclick = activeHuman;
}

function activeHuman(event){
	let humans = document.getElementsByClassName('humans');
	for (i = 0; i < humans.length; i++){
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

for (i = 0; i < 4; i++){
	document.getElementsByClassName("list")[0].children[i*2].children[0].onclick = rotate;
}

function rotate(event){
	if(event.target.style.transform == 'rotate(90deg)'){
		event.target.style.transform = 'rotate(0deg)';
		hideQuestion();
	} else {
		event.target.style.transform ='rotate(90deg)';
		showQuestion();
	}
};

function hideQuestion(){

};

function showQuestion(){

};
