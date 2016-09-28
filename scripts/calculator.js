"use strict";

function displayNumber(itemClicked){
	var result = window.document.getElementById("result");
	result.innerText += itemClicked.innerText;	
}

function changeColor(itemClicked){
	itemClicked.style.backgroundColor = "#f34";
}



