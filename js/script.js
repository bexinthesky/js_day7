// Keypress Event Listener with function(event)
document.addEventListener("keypress", function(event) {
  console.log(this, "event listener");
  console.log(event.which);
});

// Function for changing character to keycode when typed inside of input tag in html
function typedKey(event) {
  var key = event.which || event.keyCode;
  document.getElementById('key-value').innerHTML = key;
  console.log(this, "this is this inside typedKey");
}


// keypress event listener first attempt
/*document.addEventListener('keypress', function(event){
    console.log(event.keyCode);
});*/
