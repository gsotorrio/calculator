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

function getDelete (){
	var aux = window.document.getElementById("result");
	
	if (aux.innerText != 0){
		aux.innerText = 0;
	}
}

var lastResult = 0;


function operate (operation){
	var currentNumber = parseInt(window.document.getElementById("result").innerText);
	
	switch (operation) {
		case "+":
			lastResult = currentNumber;
			currentNumber = "";
		break;
	}	
}


 
