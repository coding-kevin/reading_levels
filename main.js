document.getElementById("submit").addEventListener("click", function () {
  var userInput = document.getElementById("text").value;
  //blank error
  if (userInput == "") {
    alert("Invalid Entry.");
  }

  var characters = (userInput.match(/[a-zA-Z]/g) || []).length;
  var sentences = (userInput.match(/\?|\!|\./g) || []).length;
  var words = (userInput.match(/\s/g) || []).length + 1;
  var avgCharacterCount = (characters * 100) / words;
  var avgSentenceCount = (sentences * 100) / words;
  var output = Math.round(
    0.0588 * avgCharacterCount - 0.296 * avgSentenceCount - 15.8
  );

  if (userInput.length < 10 || sentences < 2) {
    alert("Please enter at least four sentences of text");
  }

  if (output < 1) {
    output = "<1";
  }

  document.getElementsByName("output")[0].value = output;
});

//https://stackoverflow.com/questions/46987505/how-to-count-letters-in-javascript
