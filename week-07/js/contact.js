function validateName(x, l, lan) {
    input = x.value;
    var isTrue = true;
    for (i = 0; i < input.length; i++) {
      if (lan.indexOf(input.charAt(i)) == -1) {
        isTrue = false;
        break;
      }
    }
    if (isTrue && input.length >= l) {
      return true;
    } else {
      return false;
    }
}
function validateEmail(email) {
    var emailExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailExpression.test(email);
}

var long = 3;
var alphabet = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑXWOPQRSTUVWXYZ ";
var nameIndex = document.getElementById ("name-index");
var nameIndexError = document.getElementById ("name-error-index");
nameIndex.addEventListener ("blur", function(){
    result = validateName(nameIndex, long, alphabet);
    if (result==true) {
        nameIndex.classList.remove("red-border");
        nameIndex.classList.add("green-border");
        nameIndexError.textContent="";
    } else {
        nameIndex.classList.remove("green-border");
        nameIndex.classList.add("red-border");
        nameIndexError.textContent="Only letters (min 3)";
    }
})
nameIndex.addEventListener("focus", function () {
    nameIndex.classList.remove("red-border");
    nameIndex.classList.remove("green-border");
    nameIndexError.textContent="";
  });
var surnameIndex = document.getElementById ("surname-index");
var surnameIndexError = document.getElementById ("surname-error-index");
surnameIndex.addEventListener ("blur", function(){
    result = validateName(surnameIndex, long, alphabet);
    if (result==true) {
        surnameIndex.classList.remove("red-border");
        surnameIndex.classList.add("green-border");
        surnameIndexError.textContent="";
    } else {
        surnameIndex.classList.remove("green-border");
        surnameIndex.classList.add("red-border");
        surnameIndexError.textContent="Only letters (min 3)";
    }
})
surnameIndex.addEventListener("focus", function () {
    surnameIndex.classList.remove("red-border");
    surnameIndex.classList.remove("green-border");
    surnameIndexError.textContent="";
  });

var emailIndex = document.getElementById ("email-index");
var emailIndexError = document.getElementById ("email-error-index");
emailIndex.addEventListener ("blur",function(){
    emailIndexValue = emailIndex.value;
    result = validateEmail(emailIndexValue);
  if (result) {
    emailIndex.classList.remove("red-border");
    emailIndexError.textContent = "";
    emailIndex.classList.add("green-border");
  } else {
    emailIndex.classList.remove("green-border");
    emailIndex.classList.add("red-border");
    emailIndexError.textContent = "Invalid e-mail. Must be nn@nnn.com";
  }
})
emailIndex.addEventListener("focus", function () {
    emailIndexError.textContent = "";
    emailIndex.classList.remove("red-border");
    emailIndex.classList.remove("green-border");
  });
const alphanumeric = "0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑXWOPQRSTUVWXYZ ";
var textInput = document.getElementById ("textarea-input");
var textIndexError = document.getElementById ("textarea-error-index");
textInput.addEventListener ("blur", function(){
    result = validateName (textInput, 3, alphanumeric)
    if (result==true) {
        textInput.classList.remove("red-border");
        textInput.classList.add("green-border");
        textIndexError.textContent="";
    } else {
        textInput.classList.remove("green-border");
        textInput.classList.add("red-border");
        textIndexError.textContent="Only letters (min 3)";
    }
})
textInput.addEventListener("focus", function () {
    textInput.classList.remove("red-border");
    textInput.classList.remove("green-border");
    textIndexError.textContent="";
});
var sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", function (){
    var myClass = "green-border";
    if (nameIndex.className.split(" ").indexOf(myClass) !== -1 &&
    emailIndex.className.split(" ").indexOf(myClass) !== -1 &&
    surnameIndex.className.split(" ").indexOf(myClass) !== -1 &&
    textInput.className.split(" ").indexOf(myClass) !== -1) {
        alert ("Name: "+nameIndex.value+"\nSurname: "+surnameIndex.value+"\nEmail: "+emailIndex.value+"\n Your message: "+textInput.value);
    }
    else {
        alert ("There is something wrong with almost 1 field. Please review all the fields.")
    }
})
