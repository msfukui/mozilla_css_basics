var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/siamese1.jpg') {
    myImage.setAttribute('src', 'images/siamese2.jpg');
  } else {
    myImage.setAttribute('src', 'images/siamese1.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('あなたの名前を入力してください。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'ねこは素敵だよ！' + myName + 'さん！';
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'ねこは素敵だよ！' + storedName + 'さん！';
}

myButton.onclick = function() {
  setUserName();
}
