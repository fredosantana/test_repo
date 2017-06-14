var myImage = document.querySelector('img');

myImage.onclick = function () {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/wil.jpg') {
    myImage.setAttribute ('src', 'images/eflr.jpg');
    } else {
      myImage.setAttribute ('src', 'images/wil.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName () {
  var myName = prompt('Please enter you name.');
  localStorage.setItem('nam', myName);
  myHeading.textContent = 'My name is ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'My name is ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
