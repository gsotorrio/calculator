"use strict";

var lastResult = 0;
var isOperating = false;
var lastOperation = "";

function displayNumber(itemClicked){
	var display = window.document.getElementById("result");
	
	if(isOperating)
	{
		display.innerText = itemClicked.innerText;
	}
	else{
		var result = display.innerText + itemClicked.innerText;
	
		if(result.indexOf(".") != -1){
			display.innerText = result;
		}
		else{
			display.innerText = parseInt(result);
		}
	}
	
	isOperating = false;
}

function changeColor(itemClicked){
	// Clean up the ALL buttons and make green the clicked item 
	window.document.getElementById("op").style.backgroundColor = "#FFFFFF";
	window.document.getElementById("op1").style.backgroundColor = "#FFFFFF";
	window.document.getElementById("op2").style.backgroundColor = "#FFFFFF";
	window.document.getElementById("op3").style.backgroundColor = "#FFFFFF";
	window.document.getElementById("op4").style.backgroundColor = "#FFFFFF";
	itemClicked.style.backgroundColor = "#00FF00";
}

function reset (){
	// Reset the UI
	// and reset the calculator's state (all global variables)
	window.document.getElementById("op").style.backgroundColor = "#FFFFFF";
	window.document.getElementById("op1").style.backgroundColor = "#FFFFFF";
	window.document.getElementById("op2").style.backgroundColor = "#FFFFFF";
	window.document.getElementById("op3").style.backgroundColor = "#FFFFFF";
	window.document.getElementById("op4").style.backgroundColor = "#FFFFFF";
	
	var aux = window.document.getElementById("result");
	
	if (aux.innerText != 0){
		aux.innerText = 0;
	}
	
	lastResult = 0;
	isOperating = false;
}

function operate (operation){
	isOperating = true;
	lastOperation = operation;
	var currentNumber = parseInt(window.document.getElementById("result").innerHTML);

	// Rest of operations (-, /, *, =)
	
	switch (operation){
		case "+":
			lastResult = add(lastResult, currentNumber);
		break;
		
		case "-":
			lastResult = subtract(lastResult, currentNumber);
		break;
		
		case "*":
			lastResult = multiply(lastResult, currentNumber);
		break;
		
		case "/":
			lastResult = divide(lastResult, currentNumber);
		break;
	}

	window.document.getElementById("result").innerHTML = lastResult;
}

function giveTotalResult(){
	var currentNumber = parseInt(window.document.getElementById("result").innerHTML);

	switch (lastOperation){
		case ('+'):
			lastResult = add(lastResult, currentNumber);
		break;	

		case ('-'):
			lastResult = subtract(lastResult, currentNumber);
		break;

		case ('*'):
			lastResult = multiply(lastResult, currentNumber);
		break;

		case ('/'):
			lastResult = divide(lastResult, currentNumber);
		break;
	}
	window.document.getElementById("result").innerHTML = lastResult;	
}

 
