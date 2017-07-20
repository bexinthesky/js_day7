// Keypress Event Listener
document.addEventListener("keypress", function(event) {
  console.log(event.which);
});

// Function for changing character to keycode
function typedKey(event) {
  var key = event.which || event.keyCode;
  document.getElementById('key-value').innerHTML = key;
}


// keypress event listener first attempt
/*document.addEventListener('keypress', function(event){
    console.log(event.keyCode);
});*/
