var secretNumber = 4;
var guess =prompt("guess a number");
 while(Number(guess) !== secretNumber){
	 var guess =(prompt("guess again"));

	 
 if(Number(guess) > secretNumber){
	alert("Too HIGH!!! Guess More");
}


else if(Number(guess) < secretNumber){
	alert("Too LOW!!! Guess More");
}


if(Number(guess) === secretNumber){
   alert("you got it");
}


 }

 






