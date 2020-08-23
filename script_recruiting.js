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