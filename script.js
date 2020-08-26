let i=0;

for(let chevron of document.getElementsByClassName("la-chevron-right")){
	chevron.number= i;
	i++;
	chevron.onclick = rotate;
}

function rotate(event){
	if(event.target.style.transform == 'rotate(90deg)'){
		event.target.style.transform = 'rotate(0deg)';
	} else {
		event.target.style.transform ='rotate(90deg)';
	};
	event.target.parentElement.nextElementSibling.hidden = !event.target.parentElement.nextElementSibling.hidden;
};