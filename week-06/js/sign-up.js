var nameInput = document.getElementById ('name-input');
nameInput.onblur = function () {
    input=nameInput.value;
    acceptedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var isTrue = true;
    for (i=0; i < input.length; i++) {
        if (acceptedChars.indexOf(input.charAt(i)) == -1) {
            isTrue = false;
            break;
        }
    }
    if (isTrue && input.length >= 3) {
        nameInput.classList.remove ('red-border');
        nameInput.classList.add ('green-border');
    }
    else {
        nameInput.classList.remove ('green-border');
        nameInput.classList.add ('red-border');
    }
}
var surnameInput = document.getElementById ('surname-input');
surnameInput.onblur = function () {
    input=surnameInput.value;
    acceptedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var isTrue = true;
    for (i=0; i < input.length; i++) {
        if (acceptedChars.indexOf(input.charAt(i)) == -1) {
            isTrue = false;
            break;
        }
    }
    if (isTrue && input.length >= 3) {
        surnameInput.classList.remove ('red-border');
        surnameInput.classList.add ('green-border');
    }
    else {
        surnameInput.classList.remove ('green-border');
        surnameInput.classList.add ('red-border');
    }
}
