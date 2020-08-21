for (img of document.getElementsByClassName('humans')){
	img.onclick = function ActiveHuman(event){  
	for (image of document.getElementsByClassName('humans')){
    	image.style.borderColor = "#999999";
    };
    event.target.style.borderColor = "#EB4A1F";
};
}
