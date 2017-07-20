document.addEventListener("keypress", function(event) {
  console.log(event.which);
});

function typedKey(event) {
  var key = event.which || event.keyCode;
  document.getElementById('key-value').innerHTML = key;
}


// keypress event listener first attempt
/*document.addEventListener('keypress', function(event){
    console.log(event.keyCode);
});*/
