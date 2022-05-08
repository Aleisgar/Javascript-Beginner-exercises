function getColor(colorNumber=0)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(){
	let randomNumber;
	let exampleColor;
	for (let i=1; i <= 10; i++){
		randomNumber = Math.floor((Math.random()*4)+1)
		//getColor(randomNumber)
		exampleColor = getColor(randomNumber)
		console.log(exampleColor)
	}
	//your loop here
	//var exampleColor = getColor(1);
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();
