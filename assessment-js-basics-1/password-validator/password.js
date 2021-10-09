

function checkForm(form){
  if(form.inputfield.value == "") {
    alert("Error: Input is empty!");
    form.inputfield.focus();
    return false;
  }

else if(form.inputfield.value < 10){
    alert('Your password must be least 10 characters long')
  }


  // regular expression to match only alphanumeric characters and spaces
  var re = /^[\w ]+$/;

  // validation fails if the input doesn't match our regular expression
  if(!re.test(form.inputfield.value)) {
    alert("Error: Input contains invalid characters!");
    form.inputfield.focus();
    return false;
  }

  // validation was successful
  return true;
}
