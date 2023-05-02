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
function validateDate(num, min, max, accepted) {
  var isTrue = true;
  for (i = 0; i < num.length; i++) {
    if (accepted.indexOf(num.charAt(i)) == -1) {
      isTrue = false;
      break;
    }
  }
  if (isTrue && num >= min && num <= max) {
    return true;
  } else {
    return false;
  }
}
function validateString(direc) {
  var hasNumber = false;
  var hasWord = false;
  var hasBlank = false;

  for (var i = 0; i < direc.length; i++) {
    var char = direc.charAt(i);
    if (char >= "0" && char <= "9") {
      hasNumber = true;
    }
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      hasWord = true;
    }
    if (char == " ") {
      hasBlank = true;
      if (i === 0) {
        return false;
      }
    }
  }
  if (hasNumber && hasWord && hasBlank) {
    return true;
  } else {
    return false;
  }
}
function validateEmail(email) {
  var emailExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailExpression.test(email);
}
//main
var long = 3;
var alphabet = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑXWOPQRSTUVWXYZ";
var nameInput = document.getElementById("name-input");
var nameError = document.getElementById("name-error-message");
nameInput.addEventListener("blur", function () {
  result = validateName(nameInput, long, alphabet);
  if (result == true) {
    nameInput.classList.remove("red-border");
    nameError.textContent = "";
    nameInput.classList.add("green-border");
  } else {
    nameInput.classList.remove("green-border");
    nameError.textContent = "Only letters (min 3, blanks are not allowed)";
    nameInput.classList.add("red-border");
  }
});
nameInput.addEventListener("focus", function () {
  removeBorder(nameInput);
  nameError.textContent = "";
});
var surnameInput = document.getElementById("surname-input");
var surnameError = document.getElementById("surname-error-message");
surnameInput.addEventListener("blur", function () {
  result = validateName(surnameInput, long, alphabet);
  if (result == true) {
    surnameInput.classList.remove("red-border");
    surnameError.textContent = "";
    surnameInput.classList.add("green-border");
  } else {
    surnameInput.classList.remove("green-border");
    surnameError.textContent = "Only letters (min 3)";
    surnameInput.classList.add("red-border");
  }
});
surnameInput.addEventListener("focus", function () {
  removeBorder(surnameInput);
  surnameError.textContent = "";
});
var long2 = 7;
var numbers = "0123456789";
var idInput = document.getElementById("id-input");
var idError = document.getElementById("id-error-message");
idInput.addEventListener("blur", function () {
  result = validateName(idInput, long2, numbers);
  if (result == true) {
    idInput.classList.remove("red-border");
    idError.textContent = "";
    idInput.classList.add("green-border");
  } else {
    idInput.classList.remove("green-border");
    idError.textContent = "Only numbers (Min. 7)";
    idInput.classList.add("red-border");
  }
});
idInput.addEventListener("focus", function () {
  removeBorder(idInput);
  idError.textContent = "";
});

var long3 = 10;
var phoneInput = document.getElementById("phone-input");
var phoneError = document.getElementById("phone-error-message");
phoneInput.addEventListener("blur", function () {
  result = validateName(phoneInput, long3, numbers);
  if (result == true && phoneInput.value.length == 10) {
    phoneInput.classList.remove("red-border");
    phoneInput.textContent = "";
    phoneInput.classList.add("green-border");
  } else {
    phoneInput.classList.remove("green-border");
    phoneError.textContent = "Only numbers (Min 10)";
    phoneInput.classList.add("red-border");
  }
});
phoneInput.addEventListener("focus", function () {
  removeBorder(phoneInput);
  phoneError.textContent = "";
});
const alphanumeric =
  "0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑXWOPQRSTUVWXYZ ";
var cityInput = document.getElementById("city-input");
var cityError = document.getElementById("city-error-message");
cityInput.addEventListener("blur", function () {
  result = validateName(cityInput, 3, alphanumeric);
  if (result == true) {
    cityInput.classList.remove("red-border");
    cityError.textContent = "";
    cityInput.classList.add("green-border");
  } else {
    cityInput.classList.remove("green-border");
    cityError.textContent = "At least 3 characters";
    cityInput.classList.add("red-border");
  }
});
cityInput.addEventListener("focus", function () {
  removeBorder(cityInput);
  cityError.textContent = "";
});
var postalCodeInput = document.getElementById("postal-code-input");
var postalCodeError = document.getElementById("postalcode-error-message");
postalCodeInput.addEventListener("blur", function () {
  result = validateName(postalCodeInput, 4, numbers);
  var postalCode = postalCodeInput.value;
  if (result == true) {
    if (postalCode.length <= 5) {
      postalCodeInput.classList.remove("red-border");
      postalCodeError.textContent = "";
      postalCodeInput.classList.add("green-border");
    } else {
      postalCodeInput.classList.remove("green-border");
      postalCodeError.textContent = "Only numbers. Between 4 and 5";
      postalCodeInput.classList.add("red-border");
    }
  } else {
    postalCodeInput.classList.remove("green-border");
    postalCodeError.textContent = "Only numbers. Between 4 and 5";
    postalCodeInput.classList.add("red-border");
  }
});
postalCodeInput.addEventListener("focus", function () {
  removeBorder(postalCodeInput);
  postalCodeError.textContent = "";
});
var dateInput = document.getElementById("birthdate-input");
var dateError = document.getElementById("birthdate-error-message");
dateInput.addEventListener("blur", function () {
  var dateValue = dateInput.value;
  var year = dateValue.substring(0, 4);
  var month = dateValue.substring(5, 7);
  var day = dateValue.substring(8, 10);
  var res1 = validateDate(day, 1, 31, numbers);
  var res2 = validateDate(month, 1, 12, numbers);
  var res3 = validateDate(year, 1920, 2005, numbers);
  if (res1 && res2 && res3) {
    dateInput.classList.remove("red-border");
    dateError.textContent = "";
    dateInput.classList.add("green-border");
  } else {
    dateInput.classList.remove("green-border");
    dateInput.classList.add("red-border");
    dateError.textContent = "Must be over 18.";
  }
});
dateInput.addEventListener("focus", function () {
  removeBorder(dateInput);
  dateError.textContent = "";
});
var addressInput = document.getElementById("address-input");
var addressError = document.getElementById("address-error-message");
addressInput.addEventListener("blur", function () {
  result = validateName(addressInput, 5, alphanumeric);
  if (result == true) {
    var addressValue = addressInput.value;
    var result2 = validateString(addressValue);
    if (result2) {
      addressInput.classList.remove("red-border");
      addressError.textContent = "";
      addressInput.classList.add("green-border");
    } else {
      addressInput.classList.remove("green-border");
      addressError.textContent = "Invalid address.";
      addressInput.classList.add("red-border");
    }
  } else {
    addressInput.classList.remove("green-border");
    addressError.textContent = "Invalid addresss";
    addressInput.classList.add("red-border");
  }
});
addressInput.addEventListener("focus", function () {
  removeBorder(addressInput);
  addressError.textContent = "";
});
var emailInput = document.getElementById("email-input");
var emailError = document.getElementById("email-error-message");
emailInput.addEventListener("blur", function () {
  var emailValue = emailInput.value;
  result = validateEmail(emailValue);
  if (result) {
    emailInput.classList.remove("red-border");
    emailError.textContent = "";
    emailInput.classList.add("green-border");
  } else {
    emailInput.classList.remove("green-border");
    emailInput.classList.add("red-border");
    emailError.textContent = "Invalid e-mail. Must be nn@nnn.com";
  }
});
emailInput.addEventListener("focus", function () {
  removeBorder(emailInput);
  emailError.textContent = "";
});
var passwordInput = document.getElementById("password-input");
var passwordError = document.getElementById("password-error-message");
passwordInput.addEventListener("blur", function () {
  var res = validateName(passwordInput, 8, alphanumeric);
  if (res) {
    passwordInput.classList.remove("red-border");
    passwordInput.classList.add("green-border");
    passwordError.textContent = "";
  } else {
    passwordInput.classList.remove("green-border");
    passwordInput.classList.add("red-border");
    passwordError.textContent = "At least 8 characters";
  }
});
passwordInput.addEventListener("focus", function () {
  removeBorder(passwordInput);
  passwordError.textContent = "";
});
var rePasswordInput = document.getElementById("repeat-password-input");
var rePasswordError = document.getElementById("repassword-error-message");
rePasswordInput.addEventListener("blur", function () {
  var res = validateName(rePasswordInput, 8, alphanumeric);
  if (res) {
    if (rePasswordInput.value == passwordInput.value) {
      rePasswordInput.classList.remove("red-border");
      rePasswordError.textContent = "";
      rePasswordInput.classList.add("green-border");
    } else {
      rePasswordInput.classList.remove("green-border");
      rePasswordInput.classList.add("red-border");
      rePasswordError.textContent = "Passwords do not match";
    }
  } else {
    rePasswordInput.classList.remove("green-border");
    rePasswordInput.classList.add("red-border");
    rePasswordError.textContent = "Passwords do not match";
  }
});
rePasswordInput.addEventListener("focus", function () {
  removeBorder(rePasswordInput);
  rePasswordError.textContent = "";
});

var registerButton = document.getElementById("register-button");
registerButton.addEventListener("click", function () {
  var myClass = "green-border";
  if (
    nameInput.className.split(" ").indexOf(myClass) !== -1 &&
    surnameInput.className.split(" ").indexOf(myClass) !== -1 &&
    phoneInput.className.split(" ").indexOf(myClass) !== -1 &&
    idInput.className.split(" ").indexOf(myClass) !== -1 &&
    cityInput.className.split(" ").indexOf(myClass) !== -1 &&
    postalCodeInput.className.split(" ").indexOf(myClass) !== -1 &&
    dateInput.className.split(" ").indexOf(myClass) !== -1 &&
    addressInput.className.split(" ").indexOf(myClass) !== -1 &&
    emailInput.className.split(" ").indexOf(myClass) !== -1 &&
    passwordInput.className.split(" ").indexOf(myClass) !== -1 &&
    rePasswordInput.className.split(" ").indexOf(myClass) !== -1
  ) {
    var dateValue = dateInput.value;
    var year = dateValue.substring(0, 4);
    var month = dateValue.substring(5, 7);
    var day = dateValue.substring(8, 10);
    var dateUrl = month + "/" + day + "/" + year;
    var nameUrl=nameInput.value;
    var surnameUrl=surnameInput.value;
    var phoneUrl=phoneInput.value;
    var idUrl=idInput.value;
    var cityUrl=cityInput.value;
    var postalUrl=postalCodeInput.value;
    var addressUrl=addressInput.value;
    var emailUrl2=emailInput.value;
    var passUrl=passwordInput.value;
    var url = 'https://api-rest-server.vercel.app/signup?name=' + nameUrl + '&lastName=' + surnameUrl + '&dni=' +
    idUrl + '&dob=' + dateUrl + '&phone=' + phoneUrl + '&address=' + addressUrl + '&city=' + cityUrl + '&zip=' + postalUrl +
    '&email=' + emailUrl2 + '&password=' + passUrl;
    alert (url)
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        var dataObj = data.data;
        var strFinal = "";
        for (var key in dataObj) {
          if (dataObj.hasOwnProperty(key)) {
            strFinal += key + ': ' + dataObj[key] + '\n';
          }
        }
        alert (strFinal)
        localStorage.setItem('address', dataObj.address);
        localStorage.setItem('city', dataObj.city);
        localStorage.setItem('dni', dataObj.dni);
        localStorage.setItem('dob', dataObj.dob);
        localStorage.setItem('email', dataObj.email);
        localStorage.setItem('lastName', dataObj.lastName);
        localStorage.setItem('name', dataObj.name);
        localStorage.setItem('password', dataObj.password);
        localStorage.setItem('phone', dataObj.phone);
        localStorage.setItem('zip', dataObj.zip);
      })
      .catch(function(error) {
        console.log('Error occurred: ' + error.message);
      });
  } else {
    alert("There is some mistake. Please fill all the fields");
  }
});
var addressValue = localStorage.getItem('address');
var cityValue = localStorage.getItem('city');
var dniValue = localStorage.getItem('dni');
var dobValue = localStorage.getItem('dob');
var yyyy = dobValue.substring(6, 10);
var mm = dobValue.substring(0, 2);
var dd = dobValue.substring(3, 5);
dobValue = yyyy + "-" + mm + "-" + dd;
var emailValue = localStorage.getItem('email');
var lastNameValue = localStorage.getItem('lastName');
var nameValue = localStorage.getItem('name');
var passwordValue = localStorage.getItem('password');
var phoneValue = localStorage.getItem('phone');
var zipValue = localStorage.getItem('zip');

document.getElementById('address-input').value = addressValue;
document.getElementById('city-input').value = cityValue;
document.getElementById('id-input').value = dniValue;
document.getElementById('birthdate-input').value = dobValue;
document.getElementById('email-input').value = emailValue;
document.getElementById('surname-input').value = lastNameValue;
document.getElementById('name-input').value = nameValue;
document.getElementById('password-input').value = passwordValue;
document.getElementById('phone-input').value = phoneValue;
document.getElementById('postal-code-input').value = zipValue;