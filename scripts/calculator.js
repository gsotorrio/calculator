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

function changeColorOperationsButton(){
	var arrayOperations = window.document.getElementsByClassName("colorOperations");
	
	for(var i = 0; i < arrayOperations.length; i++){
		arrayOperations[i].style.backgroundColor = "#FFFFFF";
	}
}


function changeColor(itemClicked){
	// Clean up the ALL buttons and make green the clicked item 
	changeColorOperationsButton();
	
	itemClicked.style.backgroundColor = "#00FF00";
}

function reset (){
	// Reset the UI
	// and reset the calculator's state (all global variables)
	changeColorOperationsButton();
	
	var tdDisplay = window.document.getElementById("result");
	
	if (tdDisplay.innerText != 0){
		tdDisplay.innerText = 0;
	}
	
	lastResult = 0;
	isOperating = false;
	lastOperation = "";
}

function operate (operation){
	isOperating = true;
	var currentNumber = parseInt(window.document.getElementById("result").innerHTML);

	// Rest of operations (-, /, *, =)
	
	switch (operation){
		case "+":
			lastResult = add(lastResult, currentNumber);
			lastOperation = add;
		break;
		
		case "-":
				if(lastResult == 0){
					lastResult = subtract(currentNumber, lastResult);
				}
				else{
					lastResult = subtract(lastResult, currentNumber);
				}
			
			lastOperation = subtract;
		break;
		
		case "*":
			lastResult = multiply(lastResult, currentNumber);
			lastOperation = multiply;
		break;
		
		case "/":
			lastResult = divide(lastResult, currentNumber);
			lastOperation = divide;
		break;
		
		case "=":
			lastResult = lastOperation(lastResult, currentNumber);
		break;
	}

	window.document.getElementById("result").innerHTML = lastResult;
}



 
