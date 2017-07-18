// event listener for keypress
// store the event inside a variable for the event itself
// find value of the key when it's pressed
// second paragraph doesn't show unless a key is clicked
// text changes with keypress - first it has instructions and then it has numbers

// keypress event listener
document.addEventListener('keypress', function(e){
    console.log(e);
});

// // set innerHTML for #new-value
var pressKey = document.querySelector('div#new-value');
pressKey.innerHTML = '<p>Here is a <strong>line</strong> of text</p>';

// // set innerHTML for #original-value
var keyValue = document.querySelector('div#original-value');
console.log(keyValue.innerHTML);



// function with input tag in html w3schools
function myFunction(event) {
  var x = event.keycode;
  var y = String.fromCharCode(x);
  document.getElementById('new-value').innerHTML = "Number: " + x + " = Character: " + y;
}

// from stack overflow
$('#new-value').keypress(function(event) {
  var code = event.keyCode;
  alert(code);
})

//from stack overflow 2
$(function () {
    $(document).keypress(function (e) {
       console.log(e.keyCode);
    });
  });
