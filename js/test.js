document.addEventListener("keypress", function(event) {
  console.log(event.which);
});

/*function typedKey(event) {
  var key = event.which || event.keyCode;
  document.getElementById('key-value').innerHTML = key;
}*/



// function typedKey(event) {
//   var text = event.which;
//   document.onkeypress.getElementById('text-typed').innerHTML = text;
// }

function newKey(event) {
  var character = event.which || event.keyCode;
  document.onkeypress.getElementByClassName('.key-value').innerHTML = character;
}

// document.querySelector('.key-typed').innerHTML = event.keyCode;

function typedKey(event) {
  var text = event.which;
  document.querySelector("#text-typed").innerHTML = text;
}
