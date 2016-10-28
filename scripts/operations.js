function giveTotalResult(){
	var a = lastResult
	var b = parseInt(window.document.getElementById("result").innerHTML);
	
	switch (lastOperation){
		case ('+'):
			window.document.getElementById("result").innerHTML = a+b;
		break;	

		case ('-'):
			window.document.getElementById("result").innerHTML = a-b;
		break;

		case ('*'):
			window.document.getElementById("result").innerHTML = a*b;
		break;

		case ('/'):
			window.document.getElementById("result").innerHTML = a/b;
		break;
	}
}

function giveParcialResult(){
	var a = lastResult
	var b = parseInt(window.document.getElementById("result").innerHTML);
	
	switch (lastOperation){
		case ('+'):
			if (numberPress <= 1){}
			else {
				LastResult = a+b;
			}
		break;	

		case ('-'):
			lastResult = a-b;
		break;

		case ('*'):
			lastResult = a*b;
		break;

		case ('/'):
			lastResult = a/b;
		break;
	}
}