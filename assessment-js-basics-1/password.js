const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Welcome the user to the password validator tool! Enter your password", function(input){
	tokens = input.split(' ');
	
	userPassword = tokens[0];3

	if(userPassword = "") {
		console.log("Error: Input is empty!");

	  }

	if (userPassword < 10 ){
		console.log('Your password must be least 10 characters long'');
	}


	reader.close()

});
