//alert("Привет!!! Я JS")
	//confirm("aua")
	//var year = prompt ("сколкьо тебе лет?")
	//alert("Привет!!! тебе " + year+ "лет")
	let width = window.innerWidth -140; 
	let height = window.innerHeight -140;

	function Run(){
		let top = Math.random()*height;
		let left = Math.random()*width;

		document.getElementById('runButton').style.top = top+'px';
		document.getElementById('runButton').style.left = left+'px';
	}  
	function AnswerOK()
	{
		alert ("я так и знал");
	
	}

	function AnswerNO(){
		alert ("как ты мог?");
	}