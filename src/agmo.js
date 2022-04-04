function validate() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var checkValidEmail = validEmail(email);
  var checkNullEmail = checkForm(email);
  var checkNullPassword = checkForm(password);

  if (checkValidEmail == false) {
    //check return value from validEmail function
    alert("Email is not valid");
  }
  if (checkNullEmail == false || checkNullPassword == false) {
    //check return value from checkForm function. Check is there any input user did not enter
    alert("Please enter all required form");
  }
  //Check all 3 conditions user must passed to get logged in.
  if (
    checkValidEmail == true &&
    checkNullEmail == true &&
    checkNullPassword == true
  ) {
    alert("Succesfully Logged In");
  }
}

function validEmail(email) {
  console.log(email);
  var RegEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //Declare regular expression to check the email form

  if (email.match(RegEx)) {
    //compare regular expression with email input by user
    return true;
  } else {
    return false;
  }
}

function checkForm(form) {
  if (form == "") {
    //compare whether the input is null or not
    return false;
  } else return true;
}
