//variables................
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let password = document.getElementById("password");
let capital = document.getElementById("alphabet_cap");
let small = document.getElementById("alphabet_small");
let special = document.getElementById("special_char");
let number = document.getElementById("num");
let str = "";
let result = "";
// all character ........ "abcdefghijklmnopqrstuvwxtzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&~";

//event listeners...........
btn.addEventListener("click", getpassword);
input.addEventListener("click", clearpassword);

//emptying password length box.....
function clearpassword() {
  password.value = "";
  input.style.background = "white";
  password.style.background = "white";
}
//function for geting password........
function getpassword() {
  str = "";
  //check which option selected....
  if (capital.checked) {
    str += capital.value;
  }

  if (small.checked) {
    str += small.value;
  }

  if (special.checked) {
    str += special.value;
  }

  if (number.checked) {
    str += number.value;
  }

  result = "";

  if (input.value == "") {
    input.style.background = "red";
    alert("Please enter Password Length.");
  }
  let passlen = parseInt(input.value);

  for (let i = 0; i < passlen; i++) {
    result += str.charAt(Math.floor(Math.random() * str.length));
    if (result.length > 18) {
      password.style.fontSize = "1.3rem";
    }

    password.value = result;
    password.style.background = "#9999ff";
    input.value = "";
  }
}
let copybtn = document.getElementById("copybtn");
copybtn.addEventListener("click", copytext);
function copytext() {
  // Get the text field

  // Select the text field
  password.select();
  password.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  if (password.value) {
    navigator.clipboard.writeText(password.value);
    // Alert the copied text
    alert("Copied the Password: " + password.value);
  }

  // Alert the copied text
  else {alert("No Password to Copy.");}
}
