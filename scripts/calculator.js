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
var numberPress = 0;

function operate (operation){
	var currentNumber = parseInt(window.document.getElementById("result").innerHTML);
	numberPress++;
	
	switch (operation){
		case "+":
			if (numberPress <= 1){
			lastResult = currentNumber;
			window.document.getElementById("result").innerHTML = "";
			}
			else {
				window.document.getElementById("result").innerHTML = "";
				lastResult = lastResult + currentNumber;
			}
		break;
	}	
}


 
