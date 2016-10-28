function add (){
	var a = lastResult
	var b = parseInt(window.document.getElementById("result").innerHTML);
	
	window.document.getElementById("result").innerHTML = a+b;
}

function subtract (a,b){
	return a-b;
}

function multiply (a,b){
	return a*b;
}

function divide (a,b){
	return a/b;
}
