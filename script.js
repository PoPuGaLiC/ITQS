hide();
view(0);

for (img of document.getElementsByClassName('humans')){
	img.onclick = activeHuman;
}

function activeHuman(event){
	let humans = document.getElementsByClassName('humans');
	hide();
	for (i = 0; i < humans.length; i++){
		if (humans[i] == event.target){
			view(i);
		}
    };
};

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
