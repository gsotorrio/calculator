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