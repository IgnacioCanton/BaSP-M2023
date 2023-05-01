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
var emailLogin = document.getElementById("email-input-login");
var emailErrorLogin = document.getElementById("email-error-login");
emailLogin.addEventListener("blur", function () {
  var emailVal = emailLogin.value;
  isTrue = validateEmail(emailVal);
  if (isTrue) {
    emailLogin.classList.remove("red-border");
    emailLogin.classList.add("green-border");
    emailErrorLogin.textContent = "";
  } else {
    emailLogin.classList.remove("green-border");
    emailLogin.classList.add("red-border");
    emailErrorLogin.textContent = "Invalid e-mail. Must be nn@nnn.com";
  }
});
emailLogin.addEventListener("focus", function () {
  emailErrorLogin.textContent = "";
  emailLogin.classList.remove("green-border");
  emailLogin.classList.remove("red-border");
});
const alphanumeric =
  "0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑXWOPQRSTUVWXYZ ";
var passwordLogin = document.getElementById("password-input-login");
var passwordErrorLogin = document.getElementById("password-error-login");
passwordLogin.addEventListener("blur", function () {
  var res = validateName(passwordLogin, 8, alphanumeric);
  if (res) {
    passwordLogin.classList.remove("red-border");
    passwordLogin.classList.add("green-border");
    passwordErrorLogin.textContent = "";
  } else {
    passwordLogin.classList.remove("green-border");
    passwordLogin.classList.add("red-border");
    passwordErrorLogin.textContent = "At least 8 characters";
  }
});
passwordLogin.addEventListener("focus", function () {
  passwordErrorLogin.textContent = "";
  passwordLogin.classList.remove("red-border");
  passwordLogin.classList.remove("green-border");
});
var loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", function () {
  var myClass = "green-border";
  if (
    emailLogin.className.split(" ").indexOf(myClass) !== -1 &&
    passwordLogin.className.split(" ").indexOf(myClass) !== -1
  ) {
    alert("Email: " + emailLogin.value + "\nPassword: " + passwordLogin.value);
    var emailUrl = emailLogin.value;
    var passUrl = passwordLogin.value;
    var url =
      "https://api-rest-server.vercel.app/login?email=" +
      emailUrl +
      "&password=" +
      passUrl;
    alert(url);
    fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("There is something wrong.");
        }
        return response.json();
      })
      .then(function (data) {
        alert("The request was successful\n" + data.msg)
      })
      .catch(function (error) {
        alert(error.message);
      });
  } else {
    alert("E-mail and password do not belong to each other.");
  }
});
