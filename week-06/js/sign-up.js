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
function removeBorder(x) {
  x.classList.remove("red-border");
  x.classList.remove("green-border");
}
function validateDate (num, min, max, accepted) {
    var isTrue = true;
    for (i = 0; i < num.length; i++) {
        if (accepted.indexOf(num.charAt(i)) == -1) {
          isTrue = false;
          break;
        }
    }
    if (isTrue && num>= min && num<=max) {
        return true;
    } else {
        return false;
    }
}
//main
var long = 3;
var alphabet = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑXWOPQRSTUVWXYZ";
var nameInput = document.getElementById("name-input");
nameInput.addEventListener("blur", function () {
  result = validateName(nameInput, long, alphabet);
  if (result == true) {
    nameInput.classList.remove("red-border");
    nameInput.classList.add("green-border");
  } else {
    nameInput.classList.remove("green-border");
    nameInput.classList.add("red-border");
  }
});
nameInput.addEventListener("focus", function () {
  removeBorder(nameInput);
});
var surnameInput = document.getElementById("surname-input");
surnameInput.addEventListener("blur", function () {
  result = validateName(surnameInput, long, alphabet);
  if (result == true) {
    surnameInput.classList.remove("red-border");
    surnameInput.classList.add("green-border");
  } else {
    surnameInput.classList.remove("green-border");
    surnameInput.classList.add("red-border");
  }
});
surnameInput.addEventListener("focus", function () {
  removeBorder(surnameInput);
});
var long2 = 7;
var numbers = "0123456789";
var idInput = document.getElementById("id-input");
idInput.addEventListener("blur", function () {
  result = validateName(idInput, long2, numbers);
  if (result == true) {
    idInput.classList.remove("red-border");
    idInput.classList.add("green-border");
  } else {
    idInput.classList.remove("green-border");
    idInput.classList.add("red-border");
  }
});
idInput.addEventListener("focus", function () {
  removeBorder(idInput);
});

var long3 = 10;
var phoneInput = document.getElementById("phone-input");
phoneInput.addEventListener("blur", function () {
  result = validateName(phoneInput, long3, numbers);
  if (result == true) {
    phoneInput.classList.remove("red-border");
    phoneInput.classList.add("green-border");
  } else {
    phoneInput.classList.remove("green-border");
    phoneInput.classList.add("red-border");
  }
});
phoneInput.addEventListener("focus", function () {
  removeBorder(phoneInput);
});
var alphanumeric = "0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑXWOPQRSTUVWXYZ ";
var cityInput = document.getElementById("city-input");
cityInput.addEventListener("blur", function () {
  result = validateName(cityInput, 3, alphanumeric);
  if (result == true) {
    cityInput.classList.remove("red-border");
    cityInput.classList.add("green-border");
  } else {
    cityInput.classList.remove("green-border");
    cityInput.classList.add("red-border");
  }
});
cityInput.addEventListener("focus", function () {
  removeBorder(cityInput);
});
var postalCodeInput = document.getElementById("postal-code-input");
postalCodeInput.addEventListener("blur", function () {
  result = validateName(postalCodeInput, 4, numbers);
  var postalCode = postalCodeInput.value;
  if (result == true) {
    if (postalCode.length <= 5) {
      postalCodeInput.classList.remove("red-border");
      postalCodeInput.classList.add("green-border");
    } else {
      postalCodeInput.classList.remove("green-border");
      postalCodeInput.classList.add("red-border");
    }
  } else {
    postalCodeInput.classList.remove("green-border");
    postalCodeInput.classList.add("red-border");
  }
});
postalCodeInput.addEventListener("focus", function () {
    removeBorder(postalCodeInput);
});
var dateInput = document.getElementById ("birthdate-input");
dateInput.addEventListener ('blur', function(){
    var dateValue = dateInput.value;
    var year = dateValue.substring(0,4);
    var month = dateValue.substring(5,7);
    var day = dateValue.substring (8,10);
    var res1 = validateDate (day,1,31,numbers);
    var res2 = validateDate (month,1,12,numbers);
    var res3 = validateDate (year,1920,2003,numbers);
    if (res1 && res2 && res3) {
        dateInput.classList.remove("red-border");
        dateInput.classList.add("green-border");
    }
    else {
        dateInput.classList.remove("green-border");
        dateInput.classList.add("red-border");
    }
})
dateInput.addEventListener("focus", function () {
    removeBorder(dateInput);
});

