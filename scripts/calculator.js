"use strict";

function displayNumber(itemClicked){
	var result = window.document.getElementById("result");
	
	if (result.innerText == "0"){
		result.innerText = "";
	}
	
	result.innerText += itemClicked.innerText;	
}

function changeColor(itemClicked){
	itemClicked.style.backgroundColor = "#00FF00";
}



