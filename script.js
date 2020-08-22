for (img of document.getElementsByClassName('humans')){
	img.onclick = function ActiveHuman(event){
	let number = 0;
	let position = 0;  
	for (image of document.getElementsByClassName('humans')){
		number++;
		if (image == event.target){
			position = number;
		}
    	image.style.borderColor = "#999999";
    };
    let activeNumber = 0;
    for (cell of document.getElementsByClassName('gall')){
    	activeNumber++;
    	cell.style.display = "none";
    	console.log(number);
    	if(activeNumber == position){
    		cell.style.display = "block";
    	};
    };
    event.target.style.borderColor = "#EB4A1F";
	};
}
