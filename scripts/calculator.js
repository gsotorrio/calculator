"use strict";

var lastResult = 0;
var isOperating = false;

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
	itemClicked.style.backgroundColor = "#00FF00";
}

function reset (){
	// Reset the UI
	// and reset the calculator's stage (all global variables)
	
	var aux = window.document.getElementById("result");
	
	if (aux.innerText != 0){
		aux.innerText = 0;
	}
}

function operate (operation){
	isOperating = true;
	
	var currentNumber = parseInt(window.document.getElementById("result").innerHTML);

	// Rest of operations (-, /, *, =)
	
	switch (operation){
		case "+":
			lastResult = add(currentNumber, lastResult);
		break;
	}

	window.document.getElementById("result").innerHTML = lastResult;
}


 
