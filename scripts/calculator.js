"use strict";

function displayNumber(itemClicked){
	var result = window.document.getElementById("result");
	
	if (result.innerText == "0"){
		result.innerText = "";
	}
	
	if (numberPress >= 1){
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
var lastOperation = "";

function operate (operation){
	var currentNumber = parseInt(window.document.getElementById("result").innerHTML);
	numberPress++;
	lastOperation = operation;
	
	switch (operation){
		case "+":
			if (numberPress <= 1){
			lastResult = currentNumber;
			}
			else { 
			lastResult = lastResult + currentNumber;
			}
		break;
		
		case "-":
			if (numberPress <= 1){
			lastResult = currentNumber;
			}
			else {
				lastResult = lastResult - currentNumber;
			}
		break;
		
		case "*":
			if (numberPress <= 1){
			lastResult = currentNumber;
			}
			else {
				lastResult = lastResult * currentNumber;
			}
		break;
		
		case "/":
			if (numberPress <= 1){
			lastResult = currentNumber;
			}
			else {
				lastResult = lastResult / currentNumber;
			}
		break;
	}	
}


 
