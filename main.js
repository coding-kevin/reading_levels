document.getElementById("submit").addEventListener("click", function () {
  
  //Get user input
  var userInput = document.getElementById("text").value;
  if (userInput == "") {
    alert("Invalid Entry.");
  }

  // Count letters with RegEx
  var characters = (userInput.match(/[a-zA-Z]/g) || []).length;
  var sentences = (userInput.match(/\?|\!|\./g) || []).length;
  var words = (userInput.match(/\s/g) || []).length + 1;
  var avgCharacterCount = (characters * 100) / words;
  var avgSentenceCount = (sentences * 100) / words;
  var output = Math.round(
    0.0588 * avgCharacterCount - 0.296 * avgSentenceCount - 15.8
  );

  //ensure length of input is sufficient
  if (userInput.length < 10 || sentences < 2) {
    alert("Please enter at least four sentences of text");
  }

  //handle grade levels that are below 1st grade
  if (output < 1) {
    output = "<1";
  }
  
  //output 
  document.getElementsByName("output")[0].value = output;
});


