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

function getDelete (itemClicked){
	var aux = window.document.getElementById("result");
	
	if (aux.innerText != "0"){
		aux.innerText = 0;
	}
}



function operation (itemClicked){
	var result = window.document.getElementById("result");
	var number1 = 0;
	
	switch (number1) {
		case "add":
			result.innerText = number1 + result.innerText;
		break;
		
		case "subtract":
			result.innerText = number1 - result.innerText;
		break;
		
		case "multiply":
			result.innerText = number1 * result.innerText;
		break;
		
		case "divide":
			result.innerText = number1 / result.innerText;
		break;
	}
}



